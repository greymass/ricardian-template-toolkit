export const WhiteList: { [index: string]: string[] } = {
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  h7: [],
  h8: [],
  br: [],
  b: [],
  i: [],
  strong: [],
  em: [],
  a: ['href'],
  pre: [],
  code: [],
  img: ['src', 'longdesc'],
  tt: [],
  div: ['itemscope', 'itemtype'],
  ins: ['cite'],
  del: ['cite'],
  sup: [],
  sub: [],
  p: [],
  ol: [],
  ul: [],
  table: [],
  thead: [],
  tbody: [],
  tfoot: [],
  blockquote: ['cite'],
  dl: [],
  dt: [],
  dd: [],
  kbd: [],
  q: ['cite'],
  samp: [],
  var: [],
  hr: [],
  ruby: [],
  rt: [],
  rp: [],
  li: [],
  tr: [],
  td: [],
  th: [],
  s: [],
  strike: [],
  summary: [],
  details: [],
  _commonattrs_: [
    'abbr',
    'accept',
    'accept-charset',
    'accesskey',
    'action',
    'align',
    'alt',
    'axis',
    'border',
    'cellpadding',
    'cellspacing',
    'char',
    'charoff',
    'charset',
    'checked',
    'class',
    'clear',
    'cols',
    'colspan',
    'color',
    'compact',
    'coords',
    'datetime',
    'dir',
    'disabled',
    'enctype',
    'for',
    'frame',
    'headers',
    'height',
    'hreflang',
    'hspace',
    'id',
    'ismap',
    'label',
    'lang',
    'maxlength',
    'media',
    'method',
    'multiple',
    'name',
    'nohref',
    'noshade',
    'nowrap',
    'open',
    'prompt',
    'readonly',
    'rel',
    'rev',
    'rows',
    'rowspan',
    'rules',
    'scope',
    'selected',
    'shape',
    'size',
    'span',
    'start',
    'summary',
    'tabindex',
    'target',
    'title',
    'type',
    'usemap',
    'valign',
    'value',
    'vspace',
    'width',
    'itemprop',
  ],
}

// List of known HTML5 empty elements - not used for whitelisting, do not edit.
export const EmptyElements: string[] = [
  'area', 'base', 'br', 'col', 'command', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source',
]
