var r=["/",":","?","#"],e=[".","/","@"];function t(t,n){for(var i,o=0,f=0,s=0,a=t.length,u=0;a--&&++u&&!(o&&r.indexOf(t[u])>-1);)"."===t[u]&&(++o,f=u);for(i=u,u=f;u--;)if(-1!==e.indexOf(t[u])){s=u+1;break}if(0===s&&i>3)return t;if(s>0&&s<2)return"";if(n.tld){for(var l=0,c=["/","@"],p=f;p--;)if(c.indexOf(t[p])>-1){l=p+1;break}return import("psl").then(function(r){return Promise.resolve(r.get(t.slice(l,i)))}).catch(function(r){throw console.error(r),Error("You must install psl library (https://www.npmjs.com/package/psl) to use `tld` option")})}return t.slice(s,i)}function n(r,e){if(void 0===e&&(e={}),"string"==typeof r)return t(r,e);if(Array.isArray(r)){for(var n=[],i=r.length,o=0;o<i;o++){var f=t(r[o],e);n.push(f)}return n}!function(){throw new TypeError("The given URL is not a string. Please verify your string|array.")}()}export{n as default};
//# sourceMappingURL=extract-domain.module.js.map