export function getDocument(node: Element | null) {
  return node?.ownerDocument || document;
}

export function getWindow(value: any) {
  return getDocument(value).defaultView || window;
}
