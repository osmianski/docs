import { unref, mergeProps, withCtx, createVNode, resolveDynamicComponent, openBlock, createBlock, Fragment, renderList, toDisplayString, Transition, createTextVNode, useSSRContext, defineComponent, h } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderVNode, ssrInterpolate, ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon, ChartBarIcon, CursorArrowRaysIcon, ShieldCheckIcon, Squares2X2Icon, ArrowPathIcon, PlayIcon, PhoneIcon, LifebuoyIcon, BookmarkSquareIcon, CalendarIcon, GlobeAltIcon, ScaleIcon, BoltIcon, ChatBubbleBottomCenterTextIcon, EnvelopeIcon } from "@heroicons/vue/24/outline/index.js";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/vue/20/solid/index.js";
import { Head } from "@inertiajs/inertia-vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main$6 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const solutions = [
      {
        name: "Analytics",
        description: "Get a better understanding of where your traffic is coming from.",
        href: "#",
        icon: ChartBarIcon
      },
      {
        name: "Engagement",
        description: "Speak directly to your customers in a more meaningful way.",
        href: "#",
        icon: CursorArrowRaysIcon
      },
      { name: "Security", description: "Your customers' data will be safe and secure.", href: "#", icon: ShieldCheckIcon },
      {
        name: "Integrations",
        description: "Connect with third-party tools that you're already using.",
        href: "#",
        icon: Squares2X2Icon
      },
      {
        name: "Automations",
        description: "Build strategic funnels that will drive your customers to convert",
        href: "#",
        icon: ArrowPathIcon
      }
    ];
    const callsToAction = [
      { name: "Watch Demo", href: "#", icon: PlayIcon },
      { name: "Contact Sales", href: "#", icon: PhoneIcon }
    ];
    const resources = [
      {
        name: "Help Center",
        description: "Get all of your questions answered in our forums or contact support.",
        href: "#",
        icon: LifebuoyIcon
      },
      {
        name: "Guides",
        description: "Learn how to maximize our platform to get the most out of it.",
        href: "#",
        icon: BookmarkSquareIcon
      },
      {
        name: "Events",
        description: "See what meet-ups and other events we might be planning near you.",
        href: "#",
        icon: CalendarIcon
      },
      { name: "Security", description: "Understand how we take your privacy seriously.", href: "#", icon: ShieldCheckIcon }
    ];
    const recentPosts = [
      { id: 1, name: "Boost your conversion rate", href: "#" },
      { id: 2, name: "How to use search engine optimization to drive traffic to your site", href: "#" },
      { id: 3, name: "Improve your customer experience", href: "#" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Popover), mergeProps({ class: "relative bg-white" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mx-auto max-w-7xl px-4 sm:px-6"${_scopeId}><div class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"${_scopeId}><div class="flex justify-start lg:w-0 lg:flex-1"${_scopeId}><a href="#"${_scopeId}><span class="sr-only"${_scopeId}>Your Company</span><img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600" alt=""${_scopeId}></a></div><div class="-my-2 -mr-2 md:hidden"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PopoverButton), { class: "inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="sr-only"${_scopeId2}>Open menu</span>`);
                  _push3(ssrRenderComponent(unref(Bars3Icon), {
                    class: "h-6 w-6",
                    "aria-hidden": "true"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("span", { class: "sr-only" }, "Open menu"),
                    createVNode(unref(Bars3Icon), {
                      class: "h-6 w-6",
                      "aria-hidden": "true"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(PopoverGroup), {
              as: "nav",
              class: "hidden space-x-10 md:flex"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Popover), { class: "relative" }, {
                    default: withCtx(({ open }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(PopoverButton), {
                          class: [open ? "text-gray-900" : "text-gray-500", "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"]
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span${_scopeId4}>Solutions</span>`);
                              _push5(ssrRenderComponent(unref(ChevronDownIcon), {
                                class: [open ? "text-gray-600" : "text-gray-400", "ml-2 h-5 w-5 group-hover:text-gray-500"],
                                "aria-hidden": "true"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("span", null, "Solutions"),
                                createVNode(unref(ChevronDownIcon), {
                                  class: [open ? "text-gray-600" : "text-gray-400", "ml-2 h-5 w-5 group-hover:text-gray-500"],
                                  "aria-hidden": "true"
                                }, null, 8, ["class"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(``);
                        _push4(ssrRenderComponent(unref(PopoverPanel), { class: "absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"${_scopeId4}><div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"${_scopeId4}><!--[-->`);
                              ssrRenderList(solutions, (item) => {
                                _push5(`<a${ssrRenderAttr("href", item.href)} class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"${_scopeId4}>`);
                                ssrRenderVNode(_push5, createVNode(resolveDynamicComponent(item.icon), {
                                  class: "h-6 w-6 flex-shrink-0 text-indigo-600",
                                  "aria-hidden": "true"
                                }, null), _parent5, _scopeId4);
                                _push5(`<div class="ml-4"${_scopeId4}><p class="text-base font-medium text-gray-900"${_scopeId4}>${ssrInterpolate(item.name)}</p><p class="mt-1 text-sm text-gray-500"${_scopeId4}>${ssrInterpolate(item.description)}</p></div></a>`);
                              });
                              _push5(`<!--]--></div><div class="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8"${_scopeId4}><!--[-->`);
                              ssrRenderList(callsToAction, (item) => {
                                _push5(`<div class="flow-root"${_scopeId4}><a${ssrRenderAttr("href", item.href)} class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"${_scopeId4}>`);
                                ssrRenderVNode(_push5, createVNode(resolveDynamicComponent(item.icon), {
                                  class: "h-6 w-6 flex-shrink-0 text-gray-400",
                                  "aria-hidden": "true"
                                }, null), _parent5, _scopeId4);
                                _push5(`<span class="ml-3"${_scopeId4}>${ssrInterpolate(item.name)}</span></a></div>`);
                              });
                              _push5(`<!--]--></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5" }, [
                                  createVNode("div", { class: "relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8" }, [
                                    (openBlock(), createBlock(Fragment, null, renderList(solutions, (item) => {
                                      return createVNode("a", {
                                        key: item.name,
                                        href: item.href,
                                        class: "-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                      }, [
                                        (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                          class: "h-6 w-6 flex-shrink-0 text-indigo-600",
                                          "aria-hidden": "true"
                                        })),
                                        createVNode("div", { class: "ml-4" }, [
                                          createVNode("p", { class: "text-base font-medium text-gray-900" }, toDisplayString(item.name), 1),
                                          createVNode("p", { class: "mt-1 text-sm text-gray-500" }, toDisplayString(item.description), 1)
                                        ])
                                      ], 8, ["href"]);
                                    }), 64))
                                  ]),
                                  createVNode("div", { class: "space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8" }, [
                                    (openBlock(), createBlock(Fragment, null, renderList(callsToAction, (item) => {
                                      return createVNode("div", {
                                        key: item.name,
                                        class: "flow-root"
                                      }, [
                                        createVNode("a", {
                                          href: item.href,
                                          class: "-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                                        }, [
                                          (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                            class: "h-6 w-6 flex-shrink-0 text-gray-400",
                                            "aria-hidden": "true"
                                          })),
                                          createVNode("span", { class: "ml-3" }, toDisplayString(item.name), 1)
                                        ], 8, ["href"])
                                      ]);
                                    }), 64))
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(PopoverButton), {
                            class: [open ? "text-gray-900" : "text-gray-500", "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"]
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Solutions"),
                              createVNode(unref(ChevronDownIcon), {
                                class: [open ? "text-gray-600" : "text-gray-400", "ml-2 h-5 w-5 group-hover:text-gray-500"],
                                "aria-hidden": "true"
                              }, null, 8, ["class"])
                            ]),
                            _: 2
                          }, 1032, ["class"]),
                          createVNode(Transition, {
                            "enter-active-class": "transition ease-out duration-200",
                            "enter-from-class": "opacity-0 translate-y-1",
                            "enter-to-class": "opacity-100 translate-y-0",
                            "leave-active-class": "transition ease-in duration-150",
                            "leave-from-class": "opacity-100 translate-y-0",
                            "leave-to-class": "opacity-0 translate-y-1"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(PopoverPanel), { class: "absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5" }, [
                                    createVNode("div", { class: "relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8" }, [
                                      (openBlock(), createBlock(Fragment, null, renderList(solutions, (item) => {
                                        return createVNode("a", {
                                          key: item.name,
                                          href: item.href,
                                          class: "-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                        }, [
                                          (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                            class: "h-6 w-6 flex-shrink-0 text-indigo-600",
                                            "aria-hidden": "true"
                                          })),
                                          createVNode("div", { class: "ml-4" }, [
                                            createVNode("p", { class: "text-base font-medium text-gray-900" }, toDisplayString(item.name), 1),
                                            createVNode("p", { class: "mt-1 text-sm text-gray-500" }, toDisplayString(item.description), 1)
                                          ])
                                        ], 8, ["href"]);
                                      }), 64))
                                    ]),
                                    createVNode("div", { class: "space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8" }, [
                                      (openBlock(), createBlock(Fragment, null, renderList(callsToAction, (item) => {
                                        return createVNode("div", {
                                          key: item.name,
                                          class: "flow-root"
                                        }, [
                                          createVNode("a", {
                                            href: item.href,
                                            class: "-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                                          }, [
                                            (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                              class: "h-6 w-6 flex-shrink-0 text-gray-400",
                                              "aria-hidden": "true"
                                            })),
                                            createVNode("span", { class: "ml-3" }, toDisplayString(item.name), 1)
                                          ], 8, ["href"])
                                        ]);
                                      }), 64))
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"${_scopeId2}>Pricing</a><a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"${_scopeId2}>Docs</a>`);
                  _push3(ssrRenderComponent(unref(Popover), { class: "relative" }, {
                    default: withCtx(({ open }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(PopoverButton), {
                          class: [open ? "text-gray-900" : "text-gray-500", "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"]
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span${_scopeId4}>More</span>`);
                              _push5(ssrRenderComponent(unref(ChevronDownIcon), {
                                class: [open ? "text-gray-600" : "text-gray-400", "ml-2 h-5 w-5 group-hover:text-gray-500"],
                                "aria-hidden": "true"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("span", null, "More"),
                                createVNode(unref(ChevronDownIcon), {
                                  class: [open ? "text-gray-600" : "text-gray-400", "ml-2 h-5 w-5 group-hover:text-gray-500"],
                                  "aria-hidden": "true"
                                }, null, 8, ["class"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(``);
                        _push4(ssrRenderComponent(unref(PopoverPanel), { class: "absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"${_scopeId4}><div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"${_scopeId4}><!--[-->`);
                              ssrRenderList(resources, (item) => {
                                _push5(`<a${ssrRenderAttr("href", item.href)} class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"${_scopeId4}>`);
                                ssrRenderVNode(_push5, createVNode(resolveDynamicComponent(item.icon), {
                                  class: "h-6 w-6 flex-shrink-0 text-indigo-600",
                                  "aria-hidden": "true"
                                }, null), _parent5, _scopeId4);
                                _push5(`<div class="ml-4"${_scopeId4}><p class="text-base font-medium text-gray-900"${_scopeId4}>${ssrInterpolate(item.name)}</p><p class="mt-1 text-sm text-gray-500"${_scopeId4}>${ssrInterpolate(item.description)}</p></div></a>`);
                              });
                              _push5(`<!--]--></div><div class="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8"${_scopeId4}><div${_scopeId4}><h3 class="text-base font-medium text-gray-500"${_scopeId4}>Recent Posts</h3><ul role="list" class="mt-4 space-y-4"${_scopeId4}><!--[-->`);
                              ssrRenderList(recentPosts, (post) => {
                                _push5(`<li class="truncate text-base"${_scopeId4}><a${ssrRenderAttr("href", post.href)} class="font-medium text-gray-900 hover:text-gray-700"${_scopeId4}>${ssrInterpolate(post.name)}</a></li>`);
                              });
                              _push5(`<!--]--></ul></div><div class="mt-5 text-sm"${_scopeId4}><a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"${_scopeId4}> View all posts <span aria-hidden="true"${_scopeId4}> \u2192</span></a></div></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5" }, [
                                  createVNode("div", { class: "relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8" }, [
                                    (openBlock(), createBlock(Fragment, null, renderList(resources, (item) => {
                                      return createVNode("a", {
                                        key: item.name,
                                        href: item.href,
                                        class: "-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                      }, [
                                        (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                          class: "h-6 w-6 flex-shrink-0 text-indigo-600",
                                          "aria-hidden": "true"
                                        })),
                                        createVNode("div", { class: "ml-4" }, [
                                          createVNode("p", { class: "text-base font-medium text-gray-900" }, toDisplayString(item.name), 1),
                                          createVNode("p", { class: "mt-1 text-sm text-gray-500" }, toDisplayString(item.description), 1)
                                        ])
                                      ], 8, ["href"]);
                                    }), 64))
                                  ]),
                                  createVNode("div", { class: "bg-gray-50 px-5 py-5 sm:px-8 sm:py-8" }, [
                                    createVNode("div", null, [
                                      createVNode("h3", { class: "text-base font-medium text-gray-500" }, "Recent Posts"),
                                      createVNode("ul", {
                                        role: "list",
                                        class: "mt-4 space-y-4"
                                      }, [
                                        (openBlock(), createBlock(Fragment, null, renderList(recentPosts, (post) => {
                                          return createVNode("li", {
                                            key: post.id,
                                            class: "truncate text-base"
                                          }, [
                                            createVNode("a", {
                                              href: post.href,
                                              class: "font-medium text-gray-900 hover:text-gray-700"
                                            }, toDisplayString(post.name), 9, ["href"])
                                          ]);
                                        }), 64))
                                      ])
                                    ]),
                                    createVNode("div", { class: "mt-5 text-sm" }, [
                                      createVNode("a", {
                                        href: "#",
                                        class: "font-medium text-indigo-600 hover:text-indigo-500"
                                      }, [
                                        createTextVNode(" View all posts "),
                                        createVNode("span", { "aria-hidden": "true" }, " \u2192")
                                      ])
                                    ])
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(PopoverButton), {
                            class: [open ? "text-gray-900" : "text-gray-500", "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"]
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, "More"),
                              createVNode(unref(ChevronDownIcon), {
                                class: [open ? "text-gray-600" : "text-gray-400", "ml-2 h-5 w-5 group-hover:text-gray-500"],
                                "aria-hidden": "true"
                              }, null, 8, ["class"])
                            ]),
                            _: 2
                          }, 1032, ["class"]),
                          createVNode(Transition, {
                            "enter-active-class": "transition ease-out duration-200",
                            "enter-from-class": "opacity-0 translate-y-1",
                            "enter-to-class": "opacity-100 translate-y-0",
                            "leave-active-class": "transition ease-in duration-150",
                            "leave-from-class": "opacity-100 translate-y-0",
                            "leave-to-class": "opacity-0 translate-y-1"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(PopoverPanel), { class: "absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5" }, [
                                    createVNode("div", { class: "relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8" }, [
                                      (openBlock(), createBlock(Fragment, null, renderList(resources, (item) => {
                                        return createVNode("a", {
                                          key: item.name,
                                          href: item.href,
                                          class: "-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                        }, [
                                          (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                            class: "h-6 w-6 flex-shrink-0 text-indigo-600",
                                            "aria-hidden": "true"
                                          })),
                                          createVNode("div", { class: "ml-4" }, [
                                            createVNode("p", { class: "text-base font-medium text-gray-900" }, toDisplayString(item.name), 1),
                                            createVNode("p", { class: "mt-1 text-sm text-gray-500" }, toDisplayString(item.description), 1)
                                          ])
                                        ], 8, ["href"]);
                                      }), 64))
                                    ]),
                                    createVNode("div", { class: "bg-gray-50 px-5 py-5 sm:px-8 sm:py-8" }, [
                                      createVNode("div", null, [
                                        createVNode("h3", { class: "text-base font-medium text-gray-500" }, "Recent Posts"),
                                        createVNode("ul", {
                                          role: "list",
                                          class: "mt-4 space-y-4"
                                        }, [
                                          (openBlock(), createBlock(Fragment, null, renderList(recentPosts, (post) => {
                                            return createVNode("li", {
                                              key: post.id,
                                              class: "truncate text-base"
                                            }, [
                                              createVNode("a", {
                                                href: post.href,
                                                class: "font-medium text-gray-900 hover:text-gray-700"
                                              }, toDisplayString(post.name), 9, ["href"])
                                            ]);
                                          }), 64))
                                        ])
                                      ]),
                                      createVNode("div", { class: "mt-5 text-sm" }, [
                                        createVNode("a", {
                                          href: "#",
                                          class: "font-medium text-indigo-600 hover:text-indigo-500"
                                        }, [
                                          createTextVNode(" View all posts "),
                                          createVNode("span", { "aria-hidden": "true" }, " \u2192")
                                        ])
                                      ])
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Popover), { class: "relative" }, {
                      default: withCtx(({ open }) => [
                        createVNode(unref(PopoverButton), {
                          class: [open ? "text-gray-900" : "text-gray-500", "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"]
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, "Solutions"),
                            createVNode(unref(ChevronDownIcon), {
                              class: [open ? "text-gray-600" : "text-gray-400", "ml-2 h-5 w-5 group-hover:text-gray-500"],
                              "aria-hidden": "true"
                            }, null, 8, ["class"])
                          ]),
                          _: 2
                        }, 1032, ["class"]),
                        createVNode(Transition, {
                          "enter-active-class": "transition ease-out duration-200",
                          "enter-from-class": "opacity-0 translate-y-1",
                          "enter-to-class": "opacity-100 translate-y-0",
                          "leave-active-class": "transition ease-in duration-150",
                          "leave-from-class": "opacity-100 translate-y-0",
                          "leave-to-class": "opacity-0 translate-y-1"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(PopoverPanel), { class: "absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5" }, [
                                  createVNode("div", { class: "relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8" }, [
                                    (openBlock(), createBlock(Fragment, null, renderList(solutions, (item) => {
                                      return createVNode("a", {
                                        key: item.name,
                                        href: item.href,
                                        class: "-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                      }, [
                                        (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                          class: "h-6 w-6 flex-shrink-0 text-indigo-600",
                                          "aria-hidden": "true"
                                        })),
                                        createVNode("div", { class: "ml-4" }, [
                                          createVNode("p", { class: "text-base font-medium text-gray-900" }, toDisplayString(item.name), 1),
                                          createVNode("p", { class: "mt-1 text-sm text-gray-500" }, toDisplayString(item.description), 1)
                                        ])
                                      ], 8, ["href"]);
                                    }), 64))
                                  ]),
                                  createVNode("div", { class: "space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8" }, [
                                    (openBlock(), createBlock(Fragment, null, renderList(callsToAction, (item) => {
                                      return createVNode("div", {
                                        key: item.name,
                                        class: "flow-root"
                                      }, [
                                        createVNode("a", {
                                          href: item.href,
                                          class: "-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                                        }, [
                                          (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                            class: "h-6 w-6 flex-shrink-0 text-gray-400",
                                            "aria-hidden": "true"
                                          })),
                                          createVNode("span", { class: "ml-3" }, toDisplayString(item.name), 1)
                                        ], 8, ["href"])
                                      ]);
                                    }), 64))
                                  ])
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("a", {
                      href: "#",
                      class: "text-base font-medium text-gray-500 hover:text-gray-900"
                    }, "Pricing"),
                    createVNode("a", {
                      href: "#",
                      class: "text-base font-medium text-gray-500 hover:text-gray-900"
                    }, "Docs"),
                    createVNode(unref(Popover), { class: "relative" }, {
                      default: withCtx(({ open }) => [
                        createVNode(unref(PopoverButton), {
                          class: [open ? "text-gray-900" : "text-gray-500", "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"]
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, "More"),
                            createVNode(unref(ChevronDownIcon), {
                              class: [open ? "text-gray-600" : "text-gray-400", "ml-2 h-5 w-5 group-hover:text-gray-500"],
                              "aria-hidden": "true"
                            }, null, 8, ["class"])
                          ]),
                          _: 2
                        }, 1032, ["class"]),
                        createVNode(Transition, {
                          "enter-active-class": "transition ease-out duration-200",
                          "enter-from-class": "opacity-0 translate-y-1",
                          "enter-to-class": "opacity-100 translate-y-0",
                          "leave-active-class": "transition ease-in duration-150",
                          "leave-from-class": "opacity-100 translate-y-0",
                          "leave-to-class": "opacity-0 translate-y-1"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(PopoverPanel), { class: "absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5" }, [
                                  createVNode("div", { class: "relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8" }, [
                                    (openBlock(), createBlock(Fragment, null, renderList(resources, (item) => {
                                      return createVNode("a", {
                                        key: item.name,
                                        href: item.href,
                                        class: "-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                      }, [
                                        (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                          class: "h-6 w-6 flex-shrink-0 text-indigo-600",
                                          "aria-hidden": "true"
                                        })),
                                        createVNode("div", { class: "ml-4" }, [
                                          createVNode("p", { class: "text-base font-medium text-gray-900" }, toDisplayString(item.name), 1),
                                          createVNode("p", { class: "mt-1 text-sm text-gray-500" }, toDisplayString(item.description), 1)
                                        ])
                                      ], 8, ["href"]);
                                    }), 64))
                                  ]),
                                  createVNode("div", { class: "bg-gray-50 px-5 py-5 sm:px-8 sm:py-8" }, [
                                    createVNode("div", null, [
                                      createVNode("h3", { class: "text-base font-medium text-gray-500" }, "Recent Posts"),
                                      createVNode("ul", {
                                        role: "list",
                                        class: "mt-4 space-y-4"
                                      }, [
                                        (openBlock(), createBlock(Fragment, null, renderList(recentPosts, (post) => {
                                          return createVNode("li", {
                                            key: post.id,
                                            class: "truncate text-base"
                                          }, [
                                            createVNode("a", {
                                              href: post.href,
                                              class: "font-medium text-gray-900 hover:text-gray-700"
                                            }, toDisplayString(post.name), 9, ["href"])
                                          ]);
                                        }), 64))
                                      ])
                                    ]),
                                    createVNode("div", { class: "mt-5 text-sm" }, [
                                      createVNode("a", {
                                        href: "#",
                                        class: "font-medium text-indigo-600 hover:text-indigo-500"
                                      }, [
                                        createTextVNode(" View all posts "),
                                        createVNode("span", { "aria-hidden": "true" }, " \u2192")
                                      ])
                                    ])
                                  ])
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0"${_scopeId}><a href="#" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"${_scopeId}>Sign in</a><a href="#" class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"${_scopeId}>Sign up</a></div></div></div>`);
            _push2(ssrRenderComponent(unref(PopoverPanel), {
              focus: "",
              class: "absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-10"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"${_scopeId2}><div class="px-5 pt-5 pb-6"${_scopeId2}><div class="flex items-center justify-between"${_scopeId2}><div${_scopeId2}><img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600" alt="Your Company"${_scopeId2}></div><div class="-mr-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(PopoverButton), { class: "inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="sr-only"${_scopeId3}>Close menu</span>`);
                        _push4(ssrRenderComponent(unref(XMarkIcon), {
                          class: "h-6 w-6",
                          "aria-hidden": "true"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("span", { class: "sr-only" }, "Close menu"),
                          createVNode(unref(XMarkIcon), {
                            class: "h-6 w-6",
                            "aria-hidden": "true"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><div class="mt-6"${_scopeId2}><nav class="grid gap-y-8"${_scopeId2}><!--[-->`);
                  ssrRenderList(solutions, (item) => {
                    _push3(`<a${ssrRenderAttr("href", item.href)} class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"${_scopeId2}>`);
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(item.icon), {
                      class: "h-6 w-6 flex-shrink-0 text-indigo-600",
                      "aria-hidden": "true"
                    }, null), _parent3, _scopeId2);
                    _push3(`<span class="ml-3 text-base font-medium text-gray-900"${_scopeId2}>${ssrInterpolate(item.name)}</span></a>`);
                  });
                  _push3(`<!--]--></nav></div></div><div class="space-y-6 py-6 px-5"${_scopeId2}><div class="grid grid-cols-2 gap-y-4 gap-x-8"${_scopeId2}><a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"${_scopeId2}>Pricing</a><a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"${_scopeId2}>Docs</a><!--[-->`);
                  ssrRenderList(resources, (item) => {
                    _push3(`<a${ssrRenderAttr("href", item.href)} class="text-base font-medium text-gray-900 hover:text-gray-700"${_scopeId2}>${ssrInterpolate(item.name)}</a>`);
                  });
                  _push3(`<!--]--></div><div${_scopeId2}><a href="#" class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"${_scopeId2}>Sign up</a><p class="mt-6 text-center text-base font-medium text-gray-500"${_scopeId2}> Existing customer? ${ssrInterpolate(" ")} <a href="#" class="text-indigo-600 hover:text-indigo-500"${_scopeId2}>Sign in</a></p></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5" }, [
                      createVNode("div", { class: "px-5 pt-5 pb-6" }, [
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("div", null, [
                            createVNode("img", {
                              class: "h-8 w-auto",
                              src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
                              alt: "Your Company"
                            })
                          ]),
                          createVNode("div", { class: "-mr-2" }, [
                            createVNode(unref(PopoverButton), { class: "inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "sr-only" }, "Close menu"),
                                createVNode(unref(XMarkIcon), {
                                  class: "h-6 w-6",
                                  "aria-hidden": "true"
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        createVNode("div", { class: "mt-6" }, [
                          createVNode("nav", { class: "grid gap-y-8" }, [
                            (openBlock(), createBlock(Fragment, null, renderList(solutions, (item) => {
                              return createVNode("a", {
                                key: item.name,
                                href: item.href,
                                class: "-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                              }, [
                                (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                  class: "h-6 w-6 flex-shrink-0 text-indigo-600",
                                  "aria-hidden": "true"
                                })),
                                createVNode("span", { class: "ml-3 text-base font-medium text-gray-900" }, toDisplayString(item.name), 1)
                              ], 8, ["href"]);
                            }), 64))
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "space-y-6 py-6 px-5" }, [
                        createVNode("div", { class: "grid grid-cols-2 gap-y-4 gap-x-8" }, [
                          createVNode("a", {
                            href: "#",
                            class: "text-base font-medium text-gray-900 hover:text-gray-700"
                          }, "Pricing"),
                          createVNode("a", {
                            href: "#",
                            class: "text-base font-medium text-gray-900 hover:text-gray-700"
                          }, "Docs"),
                          (openBlock(), createBlock(Fragment, null, renderList(resources, (item) => {
                            return createVNode("a", {
                              key: item.name,
                              href: item.href,
                              class: "text-base font-medium text-gray-900 hover:text-gray-700"
                            }, toDisplayString(item.name), 9, ["href"]);
                          }), 64))
                        ]),
                        createVNode("div", null, [
                          createVNode("a", {
                            href: "#",
                            class: "flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          }, "Sign up"),
                          createVNode("p", { class: "mt-6 text-center text-base font-medium text-gray-500" }, [
                            createTextVNode(" Existing customer? " + toDisplayString(" ") + " "),
                            createVNode("a", {
                              href: "#",
                              class: "text-indigo-600 hover:text-indigo-500"
                            }, "Sign in")
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mx-auto max-w-7xl px-4 sm:px-6" }, [
                createVNode("div", { class: "flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10" }, [
                  createVNode("div", { class: "flex justify-start lg:w-0 lg:flex-1" }, [
                    createVNode("a", { href: "#" }, [
                      createVNode("span", { class: "sr-only" }, "Your Company"),
                      createVNode("img", {
                        class: "h-8 w-auto sm:h-10",
                        src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
                        alt: ""
                      })
                    ])
                  ]),
                  createVNode("div", { class: "-my-2 -mr-2 md:hidden" }, [
                    createVNode(unref(PopoverButton), { class: "inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "sr-only" }, "Open menu"),
                        createVNode(unref(Bars3Icon), {
                          class: "h-6 w-6",
                          "aria-hidden": "true"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(unref(PopoverGroup), {
                    as: "nav",
                    class: "hidden space-x-10 md:flex"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Popover), { class: "relative" }, {
                        default: withCtx(({ open }) => [
                          createVNode(unref(PopoverButton), {
                            class: [open ? "text-gray-900" : "text-gray-500", "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"]
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Solutions"),
                              createVNode(unref(ChevronDownIcon), {
                                class: [open ? "text-gray-600" : "text-gray-400", "ml-2 h-5 w-5 group-hover:text-gray-500"],
                                "aria-hidden": "true"
                              }, null, 8, ["class"])
                            ]),
                            _: 2
                          }, 1032, ["class"]),
                          createVNode(Transition, {
                            "enter-active-class": "transition ease-out duration-200",
                            "enter-from-class": "opacity-0 translate-y-1",
                            "enter-to-class": "opacity-100 translate-y-0",
                            "leave-active-class": "transition ease-in duration-150",
                            "leave-from-class": "opacity-100 translate-y-0",
                            "leave-to-class": "opacity-0 translate-y-1"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(PopoverPanel), { class: "absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5" }, [
                                    createVNode("div", { class: "relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8" }, [
                                      (openBlock(), createBlock(Fragment, null, renderList(solutions, (item) => {
                                        return createVNode("a", {
                                          key: item.name,
                                          href: item.href,
                                          class: "-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                        }, [
                                          (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                            class: "h-6 w-6 flex-shrink-0 text-indigo-600",
                                            "aria-hidden": "true"
                                          })),
                                          createVNode("div", { class: "ml-4" }, [
                                            createVNode("p", { class: "text-base font-medium text-gray-900" }, toDisplayString(item.name), 1),
                                            createVNode("p", { class: "mt-1 text-sm text-gray-500" }, toDisplayString(item.description), 1)
                                          ])
                                        ], 8, ["href"]);
                                      }), 64))
                                    ]),
                                    createVNode("div", { class: "space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8" }, [
                                      (openBlock(), createBlock(Fragment, null, renderList(callsToAction, (item) => {
                                        return createVNode("div", {
                                          key: item.name,
                                          class: "flow-root"
                                        }, [
                                          createVNode("a", {
                                            href: item.href,
                                            class: "-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                                          }, [
                                            (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                              class: "h-6 w-6 flex-shrink-0 text-gray-400",
                                              "aria-hidden": "true"
                                            })),
                                            createVNode("span", { class: "ml-3" }, toDisplayString(item.name), 1)
                                          ], 8, ["href"])
                                        ]);
                                      }), 64))
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("a", {
                        href: "#",
                        class: "text-base font-medium text-gray-500 hover:text-gray-900"
                      }, "Pricing"),
                      createVNode("a", {
                        href: "#",
                        class: "text-base font-medium text-gray-500 hover:text-gray-900"
                      }, "Docs"),
                      createVNode(unref(Popover), { class: "relative" }, {
                        default: withCtx(({ open }) => [
                          createVNode(unref(PopoverButton), {
                            class: [open ? "text-gray-900" : "text-gray-500", "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"]
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, "More"),
                              createVNode(unref(ChevronDownIcon), {
                                class: [open ? "text-gray-600" : "text-gray-400", "ml-2 h-5 w-5 group-hover:text-gray-500"],
                                "aria-hidden": "true"
                              }, null, 8, ["class"])
                            ]),
                            _: 2
                          }, 1032, ["class"]),
                          createVNode(Transition, {
                            "enter-active-class": "transition ease-out duration-200",
                            "enter-from-class": "opacity-0 translate-y-1",
                            "enter-to-class": "opacity-100 translate-y-0",
                            "leave-active-class": "transition ease-in duration-150",
                            "leave-from-class": "opacity-100 translate-y-0",
                            "leave-to-class": "opacity-0 translate-y-1"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(PopoverPanel), { class: "absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5" }, [
                                    createVNode("div", { class: "relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8" }, [
                                      (openBlock(), createBlock(Fragment, null, renderList(resources, (item) => {
                                        return createVNode("a", {
                                          key: item.name,
                                          href: item.href,
                                          class: "-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                        }, [
                                          (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                            class: "h-6 w-6 flex-shrink-0 text-indigo-600",
                                            "aria-hidden": "true"
                                          })),
                                          createVNode("div", { class: "ml-4" }, [
                                            createVNode("p", { class: "text-base font-medium text-gray-900" }, toDisplayString(item.name), 1),
                                            createVNode("p", { class: "mt-1 text-sm text-gray-500" }, toDisplayString(item.description), 1)
                                          ])
                                        ], 8, ["href"]);
                                      }), 64))
                                    ]),
                                    createVNode("div", { class: "bg-gray-50 px-5 py-5 sm:px-8 sm:py-8" }, [
                                      createVNode("div", null, [
                                        createVNode("h3", { class: "text-base font-medium text-gray-500" }, "Recent Posts"),
                                        createVNode("ul", {
                                          role: "list",
                                          class: "mt-4 space-y-4"
                                        }, [
                                          (openBlock(), createBlock(Fragment, null, renderList(recentPosts, (post) => {
                                            return createVNode("li", {
                                              key: post.id,
                                              class: "truncate text-base"
                                            }, [
                                              createVNode("a", {
                                                href: post.href,
                                                class: "font-medium text-gray-900 hover:text-gray-700"
                                              }, toDisplayString(post.name), 9, ["href"])
                                            ]);
                                          }), 64))
                                        ])
                                      ]),
                                      createVNode("div", { class: "mt-5 text-sm" }, [
                                        createVNode("a", {
                                          href: "#",
                                          class: "font-medium text-indigo-600 hover:text-indigo-500"
                                        }, [
                                          createTextVNode(" View all posts "),
                                          createVNode("span", { "aria-hidden": "true" }, " \u2192")
                                        ])
                                      ])
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "hidden items-center justify-end md:flex md:flex-1 lg:w-0" }, [
                    createVNode("a", {
                      href: "#",
                      class: "whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                    }, "Sign in"),
                    createVNode("a", {
                      href: "#",
                      class: "ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    }, "Sign up")
                  ])
                ])
              ]),
              createVNode(Transition, {
                "enter-active-class": "duration-200 ease-out",
                "enter-from-class": "opacity-0 scale-95",
                "enter-to-class": "opacity-100 scale-100",
                "leave-active-class": "duration-100 ease-in",
                "leave-from-class": "opacity-100 scale-100",
                "leave-to-class": "opacity-0 scale-95"
              }, {
                default: withCtx(() => [
                  createVNode(unref(PopoverPanel), {
                    focus: "",
                    class: "absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-10"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5" }, [
                        createVNode("div", { class: "px-5 pt-5 pb-6" }, [
                          createVNode("div", { class: "flex items-center justify-between" }, [
                            createVNode("div", null, [
                              createVNode("img", {
                                class: "h-8 w-auto",
                                src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
                                alt: "Your Company"
                              })
                            ]),
                            createVNode("div", { class: "-mr-2" }, [
                              createVNode(unref(PopoverButton), { class: "inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "sr-only" }, "Close menu"),
                                  createVNode(unref(XMarkIcon), {
                                    class: "h-6 w-6",
                                    "aria-hidden": "true"
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createVNode("div", { class: "mt-6" }, [
                            createVNode("nav", { class: "grid gap-y-8" }, [
                              (openBlock(), createBlock(Fragment, null, renderList(solutions, (item) => {
                                return createVNode("a", {
                                  key: item.name,
                                  href: item.href,
                                  class: "-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                                }, [
                                  (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                    class: "h-6 w-6 flex-shrink-0 text-indigo-600",
                                    "aria-hidden": "true"
                                  })),
                                  createVNode("span", { class: "ml-3 text-base font-medium text-gray-900" }, toDisplayString(item.name), 1)
                                ], 8, ["href"]);
                              }), 64))
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "space-y-6 py-6 px-5" }, [
                          createVNode("div", { class: "grid grid-cols-2 gap-y-4 gap-x-8" }, [
                            createVNode("a", {
                              href: "#",
                              class: "text-base font-medium text-gray-900 hover:text-gray-700"
                            }, "Pricing"),
                            createVNode("a", {
                              href: "#",
                              class: "text-base font-medium text-gray-900 hover:text-gray-700"
                            }, "Docs"),
                            (openBlock(), createBlock(Fragment, null, renderList(resources, (item) => {
                              return createVNode("a", {
                                key: item.name,
                                href: item.href,
                                class: "text-base font-medium text-gray-900 hover:text-gray-700"
                              }, toDisplayString(item.name), 9, ["href"]);
                            }), 64))
                          ]),
                          createVNode("div", null, [
                            createVNode("a", {
                              href: "#",
                              class: "flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                            }, "Sign up"),
                            createVNode("p", { class: "mt-6 text-center text-base font-medium text-gray-500" }, [
                              createTextVNode(" Existing customer? " + toDisplayString(" ") + " "),
                              createVNode("a", {
                                href: "#",
                                class: "text-indigo-600 hover:text-indigo-500"
                              }, "Sign in")
                            ])
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Landing/Shared/Header.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const navigation = {
      solutions: [
        { name: "Marketing", href: "#" },
        { name: "Analytics", href: "#" },
        { name: "Commerce", href: "#" },
        { name: "Insights", href: "#" }
      ],
      support: [
        { name: "Pricing", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "Guides", href: "#" },
        { name: "API Status", href: "#" }
      ],
      company: [
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Jobs", href: "#" },
        { name: "Press", href: "#" },
        { name: "Partners", href: "#" }
      ],
      legal: [
        { name: "Claim", href: "#" },
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" }
      ],
      social: [
        {
          name: "Facebook",
          href: "#",
          icon: defineComponent({
            render: () => h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
              h("path", {
                "fill-rule": "evenodd",
                d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                "clip-rule": "evenodd"
              })
            ])
          })
        },
        {
          name: "Instagram",
          href: "#",
          icon: defineComponent({
            render: () => h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
              h("path", {
                "fill-rule": "evenodd",
                d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                "clip-rule": "evenodd"
              })
            ])
          })
        },
        {
          name: "Twitter",
          href: "#",
          icon: defineComponent({
            render: () => h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
              h("path", {
                d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
              })
            ])
          })
        },
        {
          name: "GitHub",
          href: "#",
          icon: defineComponent({
            render: () => h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
              h("path", {
                "fill-rule": "evenodd",
                d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                "clip-rule": "evenodd"
              })
            ])
          })
        },
        {
          name: "Dribbble",
          href: "#",
          icon: defineComponent({
            render: () => h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
              h("path", {
                "fill-rule": "evenodd",
                d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z",
                "clip-rule": "evenodd"
              })
            ])
          })
        }
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: "bg-white",
        "aria-labelledby": "footer-heading"
      }, _attrs))}><h2 id="footer-heading" class="sr-only">Footer</h2><div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8"><div class="xl:grid xl:grid-cols-3 xl:gap-8"><div class="space-y-8 xl:col-span-1"><img class="h-10" src="https://tailwindui.com/img/logos/mark.svg?color=gray&amp;shade=300" alt="Company name"><p class="text-base text-gray-500">Making the world a better place through constructing elegant hierarchies.</p><div class="flex space-x-6"><!--[-->`);
      ssrRenderList(navigation.social, (item) => {
        _push(`<a${ssrRenderAttr("href", item.href)} class="text-gray-400 hover:text-gray-500"><span class="sr-only">${ssrInterpolate(item.name)}</span>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), {
          class: "h-6 w-6",
          "aria-hidden": "true"
        }, null), _parent);
        _push(`</a>`);
      });
      _push(`<!--]--></div></div><div class="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0"><div class="md:grid md:grid-cols-2 md:gap-8"><div><h3 class="text-base font-medium text-gray-900">Solutions</h3><ul role="list" class="mt-4 space-y-4"><!--[-->`);
      ssrRenderList(navigation.solutions, (item) => {
        _push(`<li><a${ssrRenderAttr("href", item.href)} class="text-base text-gray-500 hover:text-gray-900">${ssrInterpolate(item.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div><div class="mt-12 md:mt-0"><h3 class="text-base font-medium text-gray-900">Support</h3><ul role="list" class="mt-4 space-y-4"><!--[-->`);
      ssrRenderList(navigation.support, (item) => {
        _push(`<li><a${ssrRenderAttr("href", item.href)} class="text-base text-gray-500 hover:text-gray-900">${ssrInterpolate(item.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div></div><div class="md:grid md:grid-cols-2 md:gap-8"><div><h3 class="text-base font-medium text-gray-900">Company</h3><ul role="list" class="mt-4 space-y-4"><!--[-->`);
      ssrRenderList(navigation.company, (item) => {
        _push(`<li><a${ssrRenderAttr("href", item.href)} class="text-base text-gray-500 hover:text-gray-900">${ssrInterpolate(item.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div><div class="mt-12 md:mt-0"><h3 class="text-base font-medium text-gray-900">Legal</h3><ul role="list" class="mt-4 space-y-4"><!--[-->`);
      ssrRenderList(navigation.legal, (item) => {
        _push(`<li><a${ssrRenderAttr("href", item.href)} class="text-base text-gray-500 hover:text-gray-900">${ssrInterpolate(item.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div></div></div></div><div class="mt-12 border-t border-gray-200 pt-8"><p class="text-base text-gray-400 xl:text-center">\xA9 2020 Your Company, Inc. All rights reserved.</p></div></div></footer>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Footer.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "Landing",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Landing.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden" }, _attrs))}><div class="relative pt-6 pb-16 sm:pb-24"><main class="mt-16 sm:mt-24"><div class="mx-auto max-w-7xl"><div class="lg:grid lg:grid-cols-12 lg:gap-8"><div class="px-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left"><div><a href="#" class="inline-flex items-center rounded-full bg-gray-900 p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"><span class="rounded-full bg-indigo-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white">We&#39;re hiring</span><span class="ml-4 text-sm">Visit our careers page</span>`);
      _push(ssrRenderComponent(unref(ChevronRightIcon), {
        class: "ml-2 h-5 w-5 text-gray-500",
        "aria-hidden": "true"
      }, null, _parent));
      _push(`</a><h1 class="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Data to enrich your online business</h1><p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt.</p><p class="mt-8 text-base font-semibold sm:mt-10">Used by</p><div class="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0"><div class="flex flex-wrap items-start justify-between"><div class="flex justify-center px-1"><img class="h-9 sm:h-10" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple"></div><div class="flex justify-center px-1"><img class="h-9 sm:h-10" src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation"></div><div class="flex justify-center px-1"><img class="h-9 sm:h-10" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit"></div></div></div></div></div><div class="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0"><div class="bg-white sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg border-2 border-gray-200"><div class="px-4 py-8 sm:px-10"><div><p class="text-sm font-medium text-gray-700">Sign in with</p><div class="mt-1 grid grid-cols-3 gap-3"><div><a href="#" class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"><span class="sr-only">Sign in with Facebook</span><svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clip-rule="evenodd"></path></svg></a></div><div><a href="#" class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"><span class="sr-only">Sign in with Twitter</span><svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path></svg></a></div><div><a href="#" class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"><span class="sr-only">Sign in with GitHub</span><svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path></svg></a></div></div></div><div class="relative mt-6"><div class="absolute inset-0 flex items-center" aria-hidden="true"><div class="w-full border-t border-gray-300"></div></div><div class="relative flex justify-center text-sm"><span class="bg-white px-2 text-gray-500">Or</span></div></div><div class="mt-6"><form action="#" method="POST" class="space-y-6"><div><label for="name" class="sr-only">User name</label><input type="text" name="name" id="name" autocomplete="name" placeholder="User name" required="" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></div><div><label for="mobile-or-email" class="sr-only">Mobile number or email</label><input type="text" name="mobile-or-email" id="mobile-or-email" autocomplete="email" placeholder="Mobile number or email" required="" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></div><div><label for="password" class="sr-only">Password</label><input id="password" name="password" type="password" placeholder="Password" autocomplete="current-password" required="" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></div><div><button type="submit" class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Create your account</button></div></form></div></div><div class="border-t-2 border-gray-200 bg-gray-50 px-4 py-6 sm:px-10"><p class="text-xs leading-5 text-gray-500">By signing up, you agree to our <a href="#" class="font-medium text-gray-900 hover:underline">Terms</a>, <a href="#" class="font-medium text-gray-900 hover:underline">Data Policy</a> and <a href="#" class="font-medium text-gray-900 hover:underline">Cookies Policy</a>.</p></div></div></div></div></div></main></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Landing/Home/Hero.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Features",
  __ssrInlineRender: true,
  setup(__props) {
    const transferFeatures = [
      {
        id: 1,
        name: "Competitive exchange rates",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        icon: GlobeAltIcon
      },
      {
        id: 2,
        name: "No hidden fees",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        icon: ScaleIcon
      },
      {
        id: 3,
        name: "Transfers are instant",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        icon: BoltIcon
      }
    ];
    const communicationFeatures = [
      {
        id: 1,
        name: "Mobile notifications",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        icon: ChatBubbleBottomCenterTextIcon
      },
      {
        id: 2,
        name: "Reminder emails",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        icon: EnvelopeIcon
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-hidden bg-gray-50 py-16 lg:py-24" }, _attrs))}><div class="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"><svg class="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true"><defs><pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"></rect></pattern></defs><rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"></rect></svg><div class="relative"><h2 class="text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">A better way to send money</h2><p class="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in, accusamus quisquam.</p></div><div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8"><div class="relative"><h3 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Transfer funds world-wide</h3><p class="mt-3 text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere. Totam, velit.</p><dl class="mt-10 space-y-10"><!--[-->`);
      ssrRenderList(transferFeatures, (item) => {
        _push(`<div class="relative"><dt><div class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), {
          class: "h-6 w-6",
          "aria-hidden": "true"
        }, null), _parent);
        _push(`</div><p class="ml-16 text-lg font-medium leading-6 text-gray-900">${ssrInterpolate(item.name)}</p></dt><dd class="mt-2 ml-16 text-base text-gray-500">${ssrInterpolate(item.description)}</dd></div>`);
      });
      _push(`<!--]--></dl></div><div class="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true"><svg class="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404"><defs><pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"></rect></pattern></defs><rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"></rect></svg><img class="relative mx-auto" width="490" src="https://tailwindui.com/img/features/feature-example-1.png" alt=""></div></div><svg class="absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true"><defs><pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"></rect></pattern></defs><rect width="404" height="784" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"></rect></svg><div class="relative mt-12 sm:mt-16 lg:mt-24"><div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8"><div class="lg:col-start-2"><h3 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Always in the loop</h3><p class="mt-3 text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus eligendi delectus, cum deleniti sunt in labore nihil quod quibusdam expedita nemo.</p><dl class="mt-10 space-y-10"><!--[-->`);
      ssrRenderList(communicationFeatures, (item) => {
        _push(`<div class="relative"><dt><div class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), {
          class: "h-6 w-6",
          "aria-hidden": "true"
        }, null), _parent);
        _push(`</div><p class="ml-16 text-lg font-medium leading-6 text-gray-900">${ssrInterpolate(item.name)}</p></dt><dd class="mt-2 ml-16 text-base text-gray-500">${ssrInterpolate(item.description)}</dd></div>`);
      });
      _push(`<!--]--></dl></div><div class="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0"><svg class="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404" aria-hidden="true"><defs><pattern id="e80155a9-dfde-425a-b5ea-1f6fadd20131" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"></rect></pattern></defs><rect width="784" height="404" fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"></rect></svg><img class="relative mx-auto" width="490" src="https://tailwindui.com/img/features/feature-example-2.png" alt=""></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Landing/Home/Features.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))}><div class="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8"><h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"><span class="block">Ready to dive in?</span><span class="block">Start your free trial today.</span></h2><div class="mt-8 flex justify-center"><div class="inline-flex rounded-md shadow"><a href="#" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700">Get started</a></div><div class="ml-3 inline-flex"><a href="#" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-100 px-5 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200">Learn more</a></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Landing/Home/Cta.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Cta = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const __default__ = {
  layout: _sfc_main$4
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Spot</title>`);
          } else {
            return [
              createVNode("title", null, "Spot")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(Cta, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Landing/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
