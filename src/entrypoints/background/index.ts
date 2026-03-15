export default defineBackground(() => {
  browser.runtime.onInstalled.addListener(async () => {
    const RULE_ID = 1;

    await browser.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: [RULE_ID],
    });

    await browser.declarativeNetRequest.updateDynamicRules({
      addRules: [
        {
          id: RULE_ID,
          priority: 1,
          action: {
            type: browser.declarativeNetRequest.RuleActionType.MODIFY_HEADERS,
            responseHeaders: [
              {
                header: "x-frame-options",
                operation: browser.declarativeNetRequest.HeaderOperation.REMOVE,
              },
              {
                header: "content-security-policy",
                operation: browser.declarativeNetRequest.HeaderOperation.REMOVE,
              },
              {
                header: "content-security-policy-report-only",
                operation: browser.declarativeNetRequest.HeaderOperation.REMOVE,
              },
              {
                header: "frame-options",
                operation: browser.declarativeNetRequest.HeaderOperation.REMOVE,
              },
            ],
          },
          condition: {
            urlFilter: "*",
            resourceTypes: [
              browser.declarativeNetRequest.ResourceType.SUB_FRAME,
            ],
            initiatorDomains: [browser.runtime.id],
          },
        },
      ],
    });
  });
});
