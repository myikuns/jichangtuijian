// 国内 DNS 服务器
const domesticNameservers = [
  "https://223.5.5.5/dns-query",
  "https://doh.pub/dns-query"
];

// 国外 DNS 服务器
const foreignNameservers = [
  "https://1.1.1.1/dns-query",
  "https://8.8.4.4/dns-query"
];

const dnsConfig = {
  "enable": true,
  "listen": "0.0.0.0:1053",
  "ipv6": false,
  "prefer-h3": false,
  "respect-rules": true,
  "use-system-hosts": false,
  "cache-algorithm": "arc",
  "enhanced-mode": "fake-ip",
  "fake-ip-range": "198.18.0.1/16",
  "fake-ip-filter": [
    "+.lan",
    "+.local",
    "+.msftconnecttest.com",
    "+.msftncsi.com",
    "localhost.ptlogin2.qq.com",
    "localhost.sec.qq.com",
    "localhost.work.weixin.qq.com",
    "+.in-addr.arpa",
    "+.ip6.arpa",
    "time.*.com",
    "time.*.gov",
    "pool.ntp.org",
    "+.qq.com",
    "+.qpic.cn",
    "+.gtimg.cn",
    "+.gtimg.com",
    "+.qlogo.cn",
    "+.myqcloud.com"
  ],
  "default-nameserver": ["223.5.5.5"],
  "nameserver": foreignNameservers,
  "proxy-server-nameserver": domesticNameservers,
  "direct-nameserver": domesticNameservers,
  "fallback": foreignNameservers,
  "fallback-filter": {
    "geoip": true,
    "geoip-code": "CN",
    "ipcidr": ["240.0.0.0/4"],
    "domain": [
      "+.google.com",
      "+.gmail.com",
      "+.googlemail.com",
      "+.youtube.com",
      "+.facebook.com",
      "+.netflix.com",
      "+.openai.com",
      "+.anthropic.com",
      "+.claude.ai"
    ]
  },
  "nameserver-policy": {
    "geosite:private,cn": domesticNameservers,
    "geosite:cn": domesticNameservers,
    "geosite:tencent": domesticNameservers,
    "geosite:category-games@cn": domesticNameservers,
    "geosite:apple@cn": domesticNameservers,
    "geosite:microsoft@cn": domesticNameservers,
    "geosite:steam@cn": domesticNameservers,
    "geosite:bilibili": domesticNameservers,
    "geosite:iqiyi": domesticNameservers,
    "geosite:youku": domesticNameservers
  }
};

const ruleProviderCommon = {
  "type": "http",
  "format": "yaml",
  "interval": 86400
};

const mrsProviderCommon = {
  "type": "http",
  "format": "mrs",
  "interval": 86400
};

const ruleProviders = {
  "reject": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt",
    "path": "./ruleset/loyalsoldier/reject.yaml"
  },
  "applications": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt",
    "path": "./ruleset/loyalsoldier/applications.yaml"
  },
  "private": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt",
    "path": "./ruleset/loyalsoldier/private.yaml"
  },
  "direct": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt",
    "path": "./ruleset/loyalsoldier/direct.yaml"
  },
  "proxy": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt",
    "path": "./ruleset/loyalsoldier/proxy.yaml"
  },
  "gfw": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt",
    "path": "./ruleset/loyalsoldier/gfw.yaml"
  },
  "telegramcidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt",
    "path": "./ruleset/loyalsoldier/telegramcidr.yaml"
  },
  "lancidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt",
    "path": "./ruleset/loyalsoldier/lancidr.yaml"
  },
  "cncidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt",
    "path": "./ruleset/loyalsoldier/cncidr.yaml"
  },
  "google": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt",
    "path": "./ruleset/loyalsoldier/google.yaml"
  },
  "apple": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt",
    "path": "./ruleset/loyalsoldier/apple.yaml"
  },
  "icloud": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt",
    "path": "./ruleset/loyalsoldier/icloud.yaml"
  },
  "YouTube": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/YouTube.txt",
    "path": "./ruleset/xiaolin-007/YouTube.yaml"
  },
  "Netflix": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/Netflix.txt",
    "path": "./ruleset/xiaolin-007/Netflix.yaml"
  },
  "AI": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/AI.txt",
    "path": "./ruleset/xiaolin-007/AI.yaml"
  },
  "TikTok": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/TikTok.txt",
    "path": "./ruleset/xiaolin-007/TikTok.yaml"
  },
  "Steam": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Steam/Steam.yaml",
    "path": "./ruleset/blackmatrix7/Steam.yaml"
  },
  "Crypto": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Crypto/Crypto.yaml",
    "path": "./ruleset/blackmatrix7/Crypto.yaml"
  },
  "bahamut": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/Bahamut.txt",
    "path": "./ruleset/xiaolin-007/bahamut.yaml"
  },
  "geolocation-cn": {
    ...mrsProviderCommon,
    "behavior": "domain",
    "url": "https://gh-proxy.com/https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/geolocation-cn.mrs",
    "path": "./ruleset/geolocation-cn.mrs"
  },
  "geolocation-!cn": {
    ...mrsProviderCommon,
    "behavior": "domain",
    "url": "https://gh-proxy.com/https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/geolocation-!cn.mrs",
    "path": "./ruleset/geolocation-!cn.mrs"
  },
  "private-ip": {
    ...mrsProviderCommon,
    "behavior": "ipcidr",
    "url": "https://gh-proxy.com/https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geoip/private.mrs",
    "path": "./ruleset/private-ip.mrs"
  },
  "cn-ip": {
    ...mrsProviderCommon,
    "behavior": "ipcidr",
    "url": "https://gh-proxy.com/https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geoip/cn.mrs",
    "path": "./ruleset/cn-ip.mrs"
  }
};

const rules = [
  "RULE-SET,applications,全局直连",
  "RULE-SET,private,全局直连",
  "RULE-SET,private-ip,全局直连,no-resolve",
  "RULE-SET,reject,广告过滤",

  "DOMAIN-SUFFIX,googleapis.cn,节点列表",
  "DOMAIN-SUFFIX,gstatic.com,节点列表",
  "DOMAIN-SUFFIX,xn--ngstr-lra8j.com,节点列表",
  "DOMAIN-SUFFIX,github.io,节点列表",
  "DOMAIN,v2rayse.com,节点列表",

  "RULE-SET,AI,AI",
  "RULE-SET,YouTube,YouTube",
  "RULE-SET,Netflix,Netflix",
  "RULE-SET,TikTok,TikTok",
  "RULE-SET,telegramcidr,Telegram,no-resolve",
  "RULE-SET,bahamut,动画疯",
  "RULE-SET,Steam,Steam",
  "RULE-SET,Crypto,虚拟货币",
  "RULE-SET,google,Google",
  "DOMAIN-SUFFIX,gmail.com,Google",
  "DOMAIN-SUFFIX,googlemail.com,Google",

  "RULE-SET,icloud,Microsoft",
  "RULE-SET,apple,Apple",
  "RULE-SET,direct,全局直连",
  "RULE-SET,geolocation-cn,全局直连",
  "RULE-SET,lancidr,全局直连,no-resolve",
  "RULE-SET,cncidr,全局直连,no-resolve",
  "RULE-SET,cn-ip,全局直连,no-resolve",

  "RULE-SET,proxy,节点列表",
  "RULE-SET,gfw,节点列表",
  "RULE-SET,geolocation-!cn,节点列表",

  "GEOSITE,CN,全局直连",
  "GEOIP,LAN,全局直连,no-resolve",
  "GEOIP,CN,全局直连,no-resolve",
  "MATCH,漏网之鱼"
];

const proxyFilter = "^(?!.*(官网|套餐|流量|异常|剩余|到期|重置|订阅|网址|群|客服)).*$";

const groupBaseOption = {
  "timeout": 3000,
  "lazy": true,
  "max-failed-times": 3,
  "hidden": false
};

function createSelectGroup(name, proxies, icon, extra = {}) {
  return {
    ...groupBaseOption,
    "name": name,
    "type": "select",
    "proxies": proxies,
    "include-all": true,
    "filter": proxyFilter,
    "icon": icon,
    ...extra
  };
}

function createFixedGroup(name, proxies, icon) {
  return {
    ...groupBaseOption,
    "name": name,
    "type": "select",
    "proxies": proxies,
    "icon": icon
  };
}

function main(config) {
  const proxyCount = config?.proxies?.length ?? 0;
  const proxyProviderCount =
    typeof config?.["proxy-providers"] === "object" ? Object.keys(config["proxy-providers"]).length : 0;

  if (proxyCount === 0 && proxyProviderCount === 0) {
    throw new Error("配置文件中未找到任何代理");
  }

  config["dns"] = dnsConfig;
  config["geox-url"] = {
    "geoip": "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/geoip.dat",
    "geosite": "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/geosite.dat",
    "mmdb": "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/country.mmdb",
    "asn": "https://github.com/xishang0128/geoip/releases/download/latest/GeoLite2-ASN.mmdb"
  };
  config["geodata-mode"] = true;
  config["geo-auto-update"] = true;
  config["geodata-loader"] = "standard";
  config["geo-update-interval"] = 24;

  const defaultProxyGroups = ["节点列表", "全局直连"];
  const proxyOnlyGroups = ["节点列表"];
  const directFirstGroups = ["全局直连", "节点列表"];

  config["proxy-groups"] = [
    createSelectGroup(
      "节点列表",
      [],
      "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/adjust.svg"
    ),
    createSelectGroup(
      "Telegram",
      defaultProxyGroups,
      "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/telegram.svg"
    ),
    createSelectGroup(
      "YouTube",
      defaultProxyGroups,
      "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/youtube.svg"
    ),
    createSelectGroup(
      "Netflix",
      defaultProxyGroups,
      "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/icon/netflix.svg"
    ),
    createSelectGroup(
      "AI",
      proxyOnlyGroups,
      "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/chatgpt.svg"
    ),
    createSelectGroup(
      "TikTok",
      proxyOnlyGroups,
      "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/icon/tiktok.svg"
    ),
    createSelectGroup(
      "Steam",
      directFirstGroups,
      "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/steam.svg"
    ),
    createSelectGroup(
      "虚拟货币",
      defaultProxyGroups,
      "https://cryptologos.cc/logos/bitcoin-btc-logo.svg"
    ),
    createSelectGroup(
      "Google",
      defaultProxyGroups,
      "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/google.svg"
    ),
    createSelectGroup(
      "Microsoft",
      directFirstGroups,
      "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/microsoft.svg"
    ),
    createSelectGroup(
      "Apple",
      defaultProxyGroups,
      "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/apple.svg"
    ),
    createSelectGroup(
      "动画疯",
      ["节点列表"],
      "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/icon/Bahamut.svg",
      { "filter": "(?i)台|tw|TW" }
    ),
    createFixedGroup(
      "广告过滤",
      ["REJECT", "DIRECT"],
      "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/bug.svg"
    ),
    createSelectGroup(
      "全局直连",
      ["DIRECT", "节点列表"],
      "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/link.svg"
    ),
    createFixedGroup(
      "全局拦截",
      ["REJECT", "DIRECT"],
      "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/block.svg"
    ),
    createSelectGroup(
      "漏网之鱼",
      defaultProxyGroups,
      "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/fish.svg"
    )
  ];

  config["rule-providers"] = ruleProviders;
  config["rules"] = rules;

  if (config["proxies"]) {
    config["proxies"].forEach(proxy => {
      proxy.udp = true;
    });
  }

  return config;
}
