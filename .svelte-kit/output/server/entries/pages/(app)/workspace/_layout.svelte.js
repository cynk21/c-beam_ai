import { c as create_ssr_component, b as subscribe, l as getContext, g as escape } from "../../../../chunks/ssr.js";
import { u as user, W as WEBUI_NAME, n as showSidebar } from "../../../../chunks/index2.js";
import { p as page } from "../../../../chunks/stores.js";
import "../../../../chunks/client.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  let $$unsubscribe_page;
  let $i18n, $$unsubscribe_i18n;
  let $WEBUI_NAME, $$unsubscribe_WEBUI_NAME;
  let $$unsubscribe_showSidebar;
  $$unsubscribe_user = subscribe(user, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_WEBUI_NAME = subscribe(WEBUI_NAME, (value) => $WEBUI_NAME = value);
  $$unsubscribe_showSidebar = subscribe(showSidebar, (value) => value);
  const i18n = getContext("i18n");
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  $$unsubscribe_user();
  $$unsubscribe_page();
  $$unsubscribe_i18n();
  $$unsubscribe_WEBUI_NAME();
  $$unsubscribe_showSidebar();
  return `${$$result.head += `<!-- HEAD_svelte-14uepb1_START -->${$$result.title = `<title> ${escape($i18n.t("Workspace"))} • ${escape($WEBUI_NAME)} </title>`, ""}<!-- HEAD_svelte-14uepb1_END -->`, ""} ${``}`;
});
export {
  Layout as default
};
//# sourceMappingURL=_layout.svelte.js.map
