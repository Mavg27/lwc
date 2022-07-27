import _nsItem from "ns/item";
import { registerTemplate } from "lwc";
const stc0 = {
  key: 0,
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {
    d: api_dynamic_text,
    t: api_text,
    c: api_custom_element,
    i: api_iterator,
    fr: api_fragment,
    h: api_element,
  } = $api;
  return [
    api_element("ul", stc0, [
      api_fragment(
        1,
        api_iterator($cmp.items, function (item) {
          return api_custom_element(
            "ns-item",
            _nsItem,
            {
              key: item.key,
            },
            [api_text(api_dynamic_text(item.value))]
          );
        })
      ),
    ]),
  ];
  /*LWC compiler vX.X.X*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
