function addDefaultProtocol(value: string) {
  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  const authorityEnd = value.search(/[/?#]/);
  const authority = authorityEnd === -1 ? value : value.slice(0, authorityEnd);

  if (/^localhost(?::\d+)?$/i.test(authority)) {
    return `http://${value}`;
  }

  if (/^\d{1,3}(?:\.\d{1,3}){3}(?::\d+)?$/.test(authority)) {
    return `http://${value}`;
  }

  return `https://${value}`;
}

export function normalizeLooseUrl(input: string) {
  const raw = input.trim();

  if (!raw) {
    throw new Error("URL is required");
  }

  const withProtocol = addDefaultProtocol(raw);

  const protocolMatch = withProtocol.match(/^(https?:\/\/)(.*)$/i);
  if (!protocolMatch) {
    throw new Error("Please enter a valid URL");
  }

  const [, protocol, rest] = protocolMatch;

  const authorityEnd = rest.search(/[/?#]/);
  const authority = authorityEnd === -1 ? rest : rest.slice(0, authorityEnd);

  // only authority must not contain spaces
  if (/\s/.test(authority)) {
    throw new Error("Domain or port must not contain spaces");
  }

  const finalUrl = new URL(withProtocol);

  if (!finalUrl.hostname) {
    throw new Error("Please enter a valid URL");
  }

  return finalUrl.toString();
}
