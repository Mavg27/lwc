import { registerTemplate } from "lwc";
const stc0 = {
  key: 0,
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {
    d: api_dynamic_text,
    t: api_text,
    h: api_element,
    fr: api_fragment,
    i: api_iterator,
  } = $api;
  return [
    api_element("section", stc0, [
      api_fragment(
        1,
        api_iterator($cmp.items, function (item) {
          return api_fragment($cmp.item.keyOne, [
            api_element(
              "p",
              {
                key: $cmp.item.keyOne,
              },
              [api_text("1" + api_dynamic_text(item))]
            ),
            api_element(
              "p",
              {
                key: item.keyTwo,
              },
              [api_text("2" + api_dynamic_text(item))]
            ),
          ]);
        })
      ),
    ]),
  ];
  /*LWC compiler vX.X.X*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
