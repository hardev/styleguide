@import url("https://rsms.me/inter/inter.css");
@import url("https://fonts.googleapis.com/css2?family=Caveat&display=swap");
html {
  font-family: 'Inter', sans-serif !important; }

@supports (font-variation-settings: normal) {
  html {
    font-family: 'Inter var', sans-serif !important; } }
/* ====== COLORS ====== */
/* ====== FONT SIZES ====== */
/* ====== FONT WEIGHTS ====== */
/* ====== TRANSITIONS ====== */
html, body {
  color: #212529;
  font-size: 12px;
  font-weight: 400;
  font-family: 'Inter', sans-serif !important; }

ul {
  padding: 0; }
  ul li {
    list-style: none; }

strong {
  font-weight: 700; }

a {
  transition-duration: 0.6s;
  transition-property: all;
  transition-timing-function: ease;
  color: #0738CD;
  text-decoration: none; }
  a:hover {
    color: #0738CD;
    text-decoration: underline; }

.hover--color-har-blue-dark:hover {
  color: #042280 !important; }
.hover--color-har-pink:hover {
  color: #FD4B78 !important; }
.hover--color-available:hover {
  color: #018361 !important; }
.hover--color-pending:hover {
  color: #FBA000 !important; }
.hover--color-sold:hover {
  color: #CC0000 !important; }
.hover--color-auxiliary:hover {
  color: #515B7A !important; }
.hover--color-carbon:hover {
  color: #212529 !important; }
.hover--color-black:hover {
  color: #000 !important; }
.hover--color-cement:hover {
  color: #DDDDDD !important; }
.hover--color-cement-dark:hover {
  color: #5D5E5E !important; }
.hover--color-slate:hover {
  color: #3B5363 !important; }
.hover--color-slate-light:hover {
  color: #52738A !important; }
.hover--color-cloudy-sky:hover {
  color: #DFE3F0 !important; }
.hover--color-snow-white:hover {
  color: #FFF !important; }

hr {
  border-top: 1px solid #DAE1F8; }

.clear_both {
  clear: both; }

.border_radius--default {
  border-radius: 4px; }
.border_radius--pudgy {
  border-radius: 8px; }
.border_radius--small {
  border-radius: 2px; }
.border_radius--mini {
  border-radius: 1px; }

.border_thin_light {
  border: 1px solid #DFE3F0; }

.depth {
  border: 1px solid #DFE3F0; }
  .depth--landed {
    box-shadow: none; }
  .depth--emboss {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); }
  .depth--standed_out {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.24); }
  .depth--above_all {
    box-shadow: 0 10px 16px rgba(0, 0, 0, 0.24); }
  .depth--above_all_extra {
    box-shadow: 0 16px 56px 0 rgba(0, 0, 0, 0.16); }

.border-color {
  border-color: #DFE3F0; }
  .border-color--har-blue-light {
    border-color: #94AAEB !important; }
  .border-color--har-blue-light-extra {
    border-color: #DAE1F8 !important; }
  .border-color--cement_auxiliary {
    border-color: #AFB8D9 !important; }
  .border-color--auxiliary {
    border-color: #515B7A !important; }
  .border-color--cement_light {
    border-color: #F3F4F7 !important; }
  .border-color--cement {
    border-color: #DDDDDD !important; }
  .border-color--cement-dark {
    border-color: #5D5E5E !important; }
  .border-color--carbon {
    border-color: #212529 !important; }
  .border-color--slate {
    border-color: #3B5363 !important; }
  .border-color--slate-light {
    border-color: #52738A !important; }
  .border-color--cloudy-sky {
    border-color: #DFE3F0 !important; }
  .border-color--cloudy-sky-light {
    border-color: #EDF0FA !important; }
  .border-color--snow-white {
    border-color: #FFF !important; }
  .border-color--available {
    border-color: #018361 !important; }

@media (min-width: 576px) {
  .border-sm-top {
    border-top: 1px solid #DFE3F0 !important; }

  .border-sm-right {
    border-right: 1px solid #DFE3F0 !important; }

  .border-sm-bottom {
    border-bottom: 1px solid #DFE3F0 !important; }

  .border-sm-left {
    border-left: 1px solid #DFE3F0 !important; }

  .border-sm-top-0 {
    border-top: 0 !important; }

  .border-sm-right-0 {
    border-right: 0 !important; }

  .border-sm-bottom-0 {
    border-bottom: 0 !important; }

  .border-sm-left-0 {
    border-left: 0 !important; }

  .border-sm-x {
    border-left: 1px solid #DFE3F0 !important;
    border-right: 1px solid #DFE3F0 !important; }

  .border-sm-y {
    border-top: 1px solid #DFE3F0 !important;
    border-bottom: 1px solid #DFE3F0 !important; }

  .border-sm {
    border-top: 1px solid #DFE3F0 !important;
    border-bottom: 1px solid #DFE3F0 !important;
    border-left: 1px solid #DFE3F0 !important;
    border-right: 1px solid #DFE3F0 !important; }

  .border-sm-0 {
    border-top: 0 !important;
    border-bottom: 0 !important;
    border-left: 0 !important;
    border-right: 0 !important; }

  .h-sm-100 {
    height: 100% !important; } }
@media (min-width: 768px) {
  .border-md-top {
    border-top: 1px solid #DFE3F0 !important; }

  .border-md-right {
    border-right: 1px solid #DFE3F0 !important; }

  .border-md-bottom {
    border-bottom: 1px solid #DFE3F0 !important; }

  .border-md-left {
    border-left: 1px solid #DFE3F0 !important; }

  .border-md-top-0 {
    border-top: 0 !important; }

  .border-md-right-0 {
    border-right: 0 !important; }

  .border-md-bottom-0 {
    border-bottom: 0 !important; }

  .border-md-left-0 {
    border-left: 0 !important; }

  .border-md-x {
    border-left: 1px solid #DFE3F0 !important;
    border-right: 1px solid #DFE3F0 !important; }

  .border-md-y {
    border-top: 1px solid #DFE3F0 !important;
    border-bottom: 1px solid #DFE3F0 !important; }

  .border-md {
    border-top: 1px solid #DFE3F0 !important;
    border-bottom: 1px solid #DFE3F0 !important;
    border-left: 1px solid #DFE3F0 !important;
    border-right: 1px solid #DFE3F0 !important; }

  .border-md-0 {
    border-top: 0 !important;
    border-bottom: 0 !important;
    border-left: 0 !important;
    border-right: 0 !important; }

  .h-md-100 {
    height: 100% !important; } }
@media (min-width: 992px) {
  .border-lg-top {
    border-top: 1px solid #DFE3F0 !important; }

  .border-lg-right {
    border-right: 1px solid #DFE3F0 !important; }

  .border-lg-bottom {
    border-bottom: 1px solid #DFE3F0 !important; }

  .border-lg-left {
    border-left: 1px solid #DFE3F0 !important; }

  .border-lg-top-0 {
    border-top: 0 !important; }

  .border-lg-right-0 {
    border-right: 0 !important; }

  .border-lg-bottom-0 {
    border-bottom: 0 !important; }

  .border-lg-left-0 {
    border-left: 0 !important; }

  .border-lg-x {
    border-left: 1px solid #DFE3F0 !important;
    border-right: 1px solid #DFE3F0 !important; }

  .border-lg-y {
    border-top: 1px solid #DFE3F0 !important;
    border-bottom: 1px solid #DFE3F0 !important; }

  .border-lg {
    border-top: 1px solid #DFE3F0 !important;
    border-bottom: 1px solid #DFE3F0 !important;
    border-left: 1px solid #DFE3F0 !important;
    border-right: 1px solid #DFE3F0 !important; }

  .border-lg-0 {
    border-top: 0 !important;
    border-bottom: 0 !important;
    border-left: 0 !important;
    border-right: 0 !important; }

  .h-lg-100 {
    height: 100% !important; } }
@media (min-width: 1200px) {
  .border-xl-top {
    border-top: 1px solid #DFE3F0 !important; }

  .border-xl-right {
    border-right: 1px solid #DFE3F0 !important; }

  .border-xl-bottom {
    border-bottom: 1px solid #DFE3F0 !important; }

  .border-xl-left {
    border-left: 1px solid #DFE3F0 !important; }

  .border-xl-top-0 {
    border-top: 0 !important; }

  .border-xl-right-0 {
    border-right: 0 !important; }

  .border-xl-bottom-0 {
    border-bottom: 0 !important; }

  .border-xl-left-0 {
    border-left: 0 !important; }

  .border-xl-x {
    border-left: 1px solid #DFE3F0 !important;
    border-right: 1px solid #DFE3F0 !important; }

  .border-xl-y {
    border-top: 1px solid #DFE3F0 !important;
    border-bottom: 1px solid #DFE3F0 !important; }

  .border-xl {
    border-top: 1px solid #DFE3F0 !important;
    border-bottom: 1px solid #DFE3F0 !important;
    border-left: 1px solid #DFE3F0 !important;
    border-right: 1px solid #DFE3F0 !important; }

  .border-xl-0 {
    border-top: 0 !important;
    border-bottom: 0 !important;
    border-left: 0 !important;
    border-right: 0 !important; }

  .h-xl-100 {
    height: 100% !important; } }
@media screen and (max-width: 576px) {
  .border-sm-none {
    border: none !important; }

  .font_weight--normal-sm {
    font-weight: normal !important; } }
.horizontal_scrollable_items_container {
  white-space: nowrap;
  overflow-x: auto; }

.tooltip-inner {
  background-color: #212529;
  padding: 6px 10px;
  font-size: 12px; }

.tooltip.bs-tooltip-right .arrow:before {
  border-right-color: #212529 !important;
  border-width: 5px 5px 5px 0; }

.tooltip.bs-tooltip-left .arrow:before {
  border-left-color: #212529 !important;
  border-width: 5px 0 5px 5px; }

.tooltip.bs-tooltip-bottom .arrow:before {
  border-bottom-color: #212529 !important;
  border-width: 0 5px 5px; }

.tooltip.bs-tooltip-top .arrow:before {
  border-top-color: #212529 !important;
  border-width: 5px 5px 0; }

.scroll-touch {
  -webkit-overflow-scrolling: touch;
  /* Lets it scroll lazy */ }

.scroll-auto {
  -webkit-overflow-scrolling: auto;
  /* Stops scrolling immediately */ }

.status {
  border-radius: 50%;
  width: 8px;
  height: 8px;
  display: inline-block; }
  .status--active {
    background-color: #00c89c; }

.small-gutters.row {
  margin-left: -8px;
  margin-right: -8px; }

.small-gutters > .col, .small-gutters > [class*="col-"] {
  padding-right: 8px;
  padding-left: 8px; }

@media screen and (max-width: 720px) {
  .row.md-small-gutters .col, .row.md-small-gutters .col-1, .row.md-small-gutters .col-2, .row.md-small-gutters .col-3, .row.md-small-gutters .col-4, .row.md-small-gutters .col-5, .row.md-small-gutters .col-6, .row.md-small-gutters .col-7, .row.md-small-gutters .col-8, .row.md-small-gutters .col-9, .row.md-small-gutters .col-10, .row.md-small-gutters .col-11, .row.md-small-gutters .col-12 {
    padding-right: 5px;
    padding-left: 5px; }

  .bg_color_md_none {
    background-color: transparent !important; } }
.circle-image {
  border-radius: 50%;
  background-color: #EDF0FA;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  display: inline-block;
  overflow: hidden; }

.typeahead_wrapper .twitter-typeahead {
  flex: 1 1 auto; }

.typeahead_custom {
  right: 0px; }

.typeahead_custom .tp_item_text {
  text-align: left; }

.twitter-typeahead {
  display: block !important; }

.overflow-inherit {
  overflow: inherit !important; }

.bg--image {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover; }

.cursor--pointer {
  cursor: pointer !important; }

@media (max-width: 768px) {
  .bg-image-md-none {
    background-image: none !important; } }
/* ====== COLORS ====== */
.bg_color_har_blue, .hover_bg_color_har_blue:hover {
  background-color: #0738CD; }

.bg_color_har_blue_light, .hover_bg_color_har_blue_light:hover {
  background-color: #94AAEB; }

.bg_color_har_blue_light_extra, .hover_bg_color_har_blue_light_extra:hover {
  background-color: #DAE1F8; }

.bg_color_har_blue_dark, .hover_bg_color_har_blue_dark:hover {
  background-color: #042280; }

.bg_color_har_pink, .hover_bg_color_har_pink:hover {
  background-color: #FD4B78; }

.bg_color_har_pink_light, .hover_bg_color_har_pink_light:hover {
  background-color: #FFA4BB; }

.bg_color_har_pink_light_extra, .hover_bg_color_har_pink_light_extra:hover {
  background-color: #FFE4EB; }

.bg_color_har_pink_dark, .hover_bg_color_har_pink_dark:hover {
  background-color: #B03453; }

.bg_color_available, .hover_bg_color_available:hover {
  background-color: #018361; }

.bg_color_available_light, .hover_bg_color_available_light:hover {
  background-color: #E5FFF9; }

.bg_color_pending, .hover_bg_color_pending:hover {
  background-color: #FBA000; }

.bg_color_pending_light, .hover_bg_color_pending_light:hover {
  background-color: #FDF7CF; }

.bg_color_sold, .hover_bg_color_sold:hover {
  background-color: #CC0000; }

.bg_color_sold_light, .hover_bg_color_sold_light:hover {
  background-color: #FFD8D8; }

.bg_color_auxiliary, .hover_bg_color_auxiliary:hover {
  background-color: #515B7A; }

.bg_color_auxiliary_light, .hover_bg_color_auxiliary_light:hover {
  background-color: #AFB8D9; }

.bg_color_black, .hover_bg_color_black:hover {
  background-color: #000; }

.bg_color_carbon, .hover_bg_color_carbon:hover {
  background-color: #212529; }

.bg_color_cement, .hover_bg_color_cement:hover {
  background-color: #DDDDDD; }

.bg_color_cement_light, .hover_bg_color_cement_light:hover {
  background-color: #F3F4F7; }

.bg_color_cement_dark, .hover_bg_color_cement_dark:hover {
  background-color: #5D5E5E; }

.bg_color_slate, .hover_bg_color_slate:hover {
  background-color: #3B5363; }

.bg_color_slate_light, .hover_bg_color_slate_light:hover {
  background-color: #52738A; }

.bg_color_cloudy_sky, .hover_bg_color_cloudy_sky:hover {
  background-color: #DFE3F0; }

.bg_color_cloudy_sky_light, .hover_bg_color_cloudy_sky_light:hover {
  background-color: #EDF0FA; }

.bg_color_snow_white, .hover_bg_color_snow_white:hover {
  background-color: #FFF; }

.color_har_blue, a.color_har_blue {
  color: #0738CD; }

.color_har_blue_light, a.color_har_blue_light {
  color: #94AAEB; }

.color_har_blue_light_extra, a.color_har_blue_light_extra {
  color: #DAE1F8; }

.color_har_blue_dark, a.color_har_blue_dark {
  color: #042280; }

.color_har_pink, a.color_har_pink {
  color: #FD4B78; }

.color_har_pink_light, a.color_har_pink_light {
  color: #FFA4BB; }

.color_har_pink_light_extra, .color_har_pink_light_extra {
  color: #FFE4EB; }

.color_har_pink_dark, a.color_har_pink_dark {
  color: #B03453; }

.color_available, a.color_available {
  color: #018361; }

.color_available_light, a.color_available_light {
  color: #E5FFF9; }

.color_pending, a.color_pending {
  color: #FBA000; }

.color_pending_light, a.color_pending_light {
  color: #FDF7CF; }

.color_sold, a.color_sold {
  color: #CC0000; }

.color_sold_light, a.color_sold_light {
  color: #FFD8D8; }

.color_auxiliary, a.color_auxiliary {
  color: #515B7A; }

.color_auxiliary_light, a.color_auxiliary_light {
  color: #AFB8D9; }

.color_black, a.color_black {
  color: #000; }

.color_carbon, a.color_carbon {
  color: #212529; }

.color_cement, a.color_cement {
  color: #DDDDDD; }

.color_cement_light, a.color_cement_light {
  color: #F3F4F7; }

.color_cement_dark, a.color_cement_dark {
  color: #5D5E5E; }

.color_slate, a.color_slate {
  color: #3B5363; }

.color_slate_light, a.color_slate_light {
  color: #52738A; }

.color_cloudy_sky, a.color_cloudy_sky {
  color: #DFE3F0; }

.color_cloudy_sky_light, a.color_cloudy_sky_light {
  color: #EDF0FA; }

.color_snow_white, a.color_snow_white {
  color: #FFF; }

/* Font sizes */
.font_size--small_extra_extra {
  font-size: 9px;
  line-height: 12px; }
.font_size--small_extra {
  font-size: 11px;
  line-height: 16px; }
.font_size--small {
  font-size: 12px;
  line-height: 18px; }
.font_size--medium {
  font-size: 14px;
  line-height: 20px; }
.font_size--large {
  font-size: 16px;
  line-height: 24px; }
.font_size--large_extra {
  font-size: 18px;
  line-height: 26px; }
.font_size--large_extra_extra {
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.4px; }
.font_size--large_extra_extra_extra {
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.8px; }
.font_size--large_extra_extra_extra_extra {
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -1.4px; }

/* Font weights */
.font_weight--light {
  font-weight: 200; }
.font_weight--regular {
  font-weight: 400; }
.font_weight--semi_bold {
  font-weight: 600; }
.font_weight--bold {
  font-weight: 700; }
.font_weight--bold_extra {
  font-weight: 800; }

@media only screen and (max-width: 768px) and (min-width: 576px) {
  .font_size--medium_md {
    font-size: 14px !important;
    line-height: 20px; }
  .font_size--large_md {
    font-size: 16px;
    line-height: 24px; }
  .font_size--large_extra_md {
    font-size: 18px !important;
    line-height: 26px; }
  .font_size--large_extra_extra_md {
    font-size: 24px !important;
    line-height: 32px; }
  .font_size--large_extra_extra_extra_md {
    font-size: 32px !important;
    line-height: 40px; }
  .font_size--large_extra_extra_extra_extra_md {
    font-size: 48px !important;
    line-height: 40px; } }
@media screen and (max-width: 576px) {
  .font_size--medium_sm {
    font-size: 14px !important;
    line-height: 20px; }
  .font_size--small_extra_extra_sm {
    font-size: 9px !important;
    line-height: 12px !important; }
  .font_size--small_extra_sm {
    font-size: 11px !important;
    line-height: 16px !important; }
  .font_size--small_sm {
    font-size: 12px !important;
    line-height: 18px !important; }
  .font_size--large_sm {
    font-size: 16px !important;
    line-height: 24px !important; }
  .font_size--large_extra_sm {
    font-size: 18px !important;
    line-height: 26px; }
  .font_size--large_extra_extra_sm {
    font-size: 24px !important;
    line-height: 32px; }
  .font_size--large_extra_extra_extra_sm {
    font-size: 32px !important;
    line-height: 40px; }
  .font_size--large_extra_extra_extra_extra_sm {
    font-size: 48px !important;
    line-height: 40px; } }
/* Headings */
a h1, a h2, a h3, a h4, a h5, a h6 {
  cursor: pointer !important; }

h1 {
  cursor: default;
  font-weight: 700;
  color: #042280;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -1.4px;
  margin-bottom: 64px; }
  @media screen and (max-width: 576px) {
    h1 {
      font-size: 32px;
      line-height: 1.3;
      letter-spacing: 1; } }
  h1.h1--inner_page {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.8px;
    margin-bottom: 40px; }
    @media screen and (max-width: 576px) {
      h1.h1--inner_page {
        font-size: 24px;
        line-height: 1.4; } }
  h1.h1--negative {
    color: #FFF !important; }

h2 {
  text-align: left !important;
  position: relative;
  cursor: default;
  font-weight: 700;
  color: #042280;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.4px;
  margin-bottom: 24px; }
  @media screen and (max-width: 576px) {
    h2 {
      font-size: 18px; }
      h2:before {
        width: 40px;
        height: 3px;
        margin-bottom: 2px; } }
  h2:before {
    content: "";
    display: block;
    width: 56px;
    height: 4px;
    margin-bottom: 6px;
    background: #FD4B78; }
    @media screen and (max-width: 576px) {
      h2:before {
        width: 40px;
        height: 3px;
        margin-bottom: 2px; } }
  h2.h2--negative {
    color: #FFF !important; }
  h2.h2--simple {
    font-size: 24px;
    font-weight: 700;
    color: #042280; }
    h2.h2--simple:before {
      content: none; }
    h2.h2--simple__black {
      color: #212529; }
  h2.h2--light {
    font-size: 32px;
    font-weight: 600;
    color: #212529;
    line-height: 40px; }
    h2.h2--light:before {
      content: none; }
    @media screen and (max-width: 576px) {
      h2.h2--light {
        font-size: 24px;
        line-height: 32px; } }
  h2.h2--bold {
    font-size: 48px;
    font-weight: 700;
    color: #000;
    line-height: normal;
    letter-spacing: -1.2px; }
    h2.h2--bold:before {
      content: none; }
    @media screen and (max-width: 576px) {
      h2.h2--bold {
        font-size: 24px;
        line-height: 32px; } }

h3 {
  text-align: left !important;
  cursor: default;
  font-weight: 700;
  color: #042280;
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 16px; }
  h3.h3--negative {
    color: #FFF !important; }

h4 {
  text-align: left !important;
  cursor: default;
  font-weight: 700;
  color: #212529;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 16px; }
  h4.h4--negative {
    color: #FFF !important; }

.overflow-ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; }

/* Alignments */
.text_align_left {
  text-align: left; }

.text_align_right {
  text-align: right; }

.text_align_justify {
  text-align: justify; }

.list--inside li {
  list-style: inside !important;
  list-style-position: inside !important; }
.list--black li, .list .blog_content ul li {
  padding: 0px;
  margin: 0px;
  list-style: none;
  display: block;
  padding: 0px 0px 4px 14px;
  position: relative; }
  .list--black li:before, .list .blog_content ul li:before {
    position: absolute;
    display: block;
    width: 5px;
    height: 5px;
    background-color: #212529;
    left: 0px;
    top: 7px;
    content: "";
    border-radius: 50%; }
.list--blue li {
  padding: 0px;
  margin: 0px;
  list-style: none;
  display: block;
  padding: 0px 0px 10px 14px;
  position: relative;
  font-size: 14px;
  color: #0738CD;
  font-weight: 600; }
  .list--blue li:before {
    position: absolute;
    display: block;
    width: 5px;
    height: 5px;
    background-color: #0738CD;
    left: 0px;
    top: 9px;
    content: "";
    border-radius: 50%; }

.icon {
  display: inline-block;
  vertical-align: middle;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain; }
  .icon--16x16 {
    width: 16px;
    height: 16px;
    margin-right: 4px; }
  .icon--github {
    background-image: url(../images/icon-github.svg); }
  .icon--price_reduced {
    background-image: url(../images/icon-price-reduced.svg); }
  .icon--circle {
    border: 1px solid #DFE3F0;
    height: 48px;
    width: 48px;
    border-radius: 50%;
    line-height: 48px;
    text-align: center; }
    .icon--circle img {
      max-height: 30px;
      max-width: 30px; }
    .icon--circle_large {
      width: 80px;
      height: 80px;
      line-height: 80px; }
      .icon--circle_large img {
        max-height: 50px;
        max-width: 50px; }

.iconlink {
  display: inline-block;
  color: #515B7A;
  font-size: 14px;
  letter-spacing: 0.09px;
  position: relative;
  height: 24px;
  line-height: 24px;
  padding: 0px 20px 0px 28px;
  text-decoration: none !important; }
  .iconlink span {
    display: block;
    position: absolute;
    left: 0px;
    top: -1px; }
  .iconlink:hover {
    opacity: 0.5 !important;
    color: #515B7A; }

.btn:active:focus, .btn.active:focus,
.btn.focus, .btn:active.focus, .btn.active.focus {
  outline: none !important;
  box-shadow: none !important; }

.btn {
  display: inline-block;
  transition: all 0.2s ease !important;
  border-radius: 4px;
  font-weight: 600;
  /* == SIZES == */
  /* == STYLES == */
  /* == VARIATIONS == */ }
  .btn:hover, .btn:focus {
    opacity: 0.8 !important;
    -webkit-opacity: 0.8 !important;
    -moz-opacity: 0.8 !important; }
  .btn:active {
    transform: translate(0, 2px); }
  .btn--large {
    height: 48px !important;
    line-height: 48px !important;
    font-size: 16px !important;
    padding: 0 32px !important; }
  .btn--medium {
    height: 40px !important;
    line-height: 40px !important;
    font-size: 14px !important;
    padding: 0 24px !important; }
    .btn--medium__inline {
      padding: 0px 16px !important; }
  .btn--small {
    height: 32px !important;
    line-height: 32px !important;
    font-size: 12px !important;
    padding: 0 16px !important; }
    .btn--small__inline {
      padding: 0px 10px !important; }
  .btn--small-extra {
    height: 24px !important;
    line-height: 24px !important;
    font-size: 11px !important;
    padding: 0 8px !important; }
    .btn--small-extra:before {
      width: 11px !important;
      height: 11px !important; }
  @media screen and (max-width: 576px) {
    .btn--sm-small {
      height: 24px !important;
      line-height: 24px !important;
      font-size: 11px !important;
      padding: 0 8px !important; }
      .btn--sm-small:before {
        width: 11px !important;
        height: 11px !important; } }
  .btn--primary {
    background: #0738CD !important;
    border: 1px solid #042280 !important;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    padding: 0 24px;
    color: #FFF !important;
    box-shadow: 0 2px 0 #042280 !important; }
  .btn--prominent {
    background: #FD4B78 !important;
    border: 1px solid #B03453 !important;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    padding: 0 24px;
    color: #FFF !important;
    box-shadow: 0 2px 0 #B03453 !important; }
    .btn--prominent:hover {
      color: #FFF; }
  .btn--ordinary {
    background: #FFF !important;
    border: 1px solid #AFB8D9 !important;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    padding: 0 24px;
    color: #515B7A;
    box-shadow: 0 2px 0 #AFB8D9 !important; }
    .btn--ordinary:hover {
      color: #515B7A; }
  .btn--shapeless {
    background: transparent !important;
    border: 1px solid rgba(255, 255, 255, 0) !important;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    padding: 0 24px;
    color: #042280;
    box-shadow: none !important; }
    .btn--shapeless:hover {
      color: #0738CD; }
  .btn:disabled {
    opacity: 0.65 !important;
    background: #EDF0FA !important;
    border: 1px solid #AFB8D9 !important;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    padding: 0 24px;
    color: #515B7A !important;
    cursor: not-allowed;
    box-shadow: 0 2px 0 #AFB8D9 !important; }
    .btn:disabled:hover {
      color: #515B7A; }
  .btn--search {
    width: 24px !important;
    height: 24px !important;
    background: #fff url(../images/icons/24x24/icon-search.svg) center no-repeat;
    padding: 0 !important;
    border-radius: 50%; }
  .btn--simple {
    background: #FFF !important;
    border: 1px solid #AFB8D9 !important;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    padding: 0 24px;
    color: #515B7A !important;
    font-weight: 600 !important; }
  .btn--flate {
    height: 40px;
    font-size: 14px;
    color: #515B7A !important;
    box-shadow: 0 0px 0 #042280 !important; }
    .btn--flate:hover {
      background-color: #F3F4F7;
      opacity: 1 !important;
      -webkit-opacity: 1 !important;
      -moz-opacity: 1 !important; }
  .btn--text {
    height: inherit;
    font-weight: normal;
    color: #515B7A !important;
    box-shadow: 0 0px 0 #042280 !important; }
    .btn--text:hover {
      background-color: transparent;
      opacity: 1 !important;
      -webkit-opacity: 1 !important;
      -moz-opacity: 1 !important; }
  .btn--filters {
    height: 40px;
    font-size: 14px;
    color: #515B7A !important;
    box-shadow: 0 0px 0 #042280 !important;
    padding: 0 10px !important;
    display: flex;
    -ms-flex-align: center !important;
    align-items: center !important; }
    .btn--filters:hover {
      background-color: #F3F4F7;
      opacity: 1 !important;
      -webkit-opacity: 1 !important;
      -moz-opacity: 1 !important; }
    .btn--filters-active {
      background-color: #F3F4F7; }
    .btn--filters img {
      margin-right: 3px; }
    .btn--filters span {
      display: inline-block;
      height: 16px;
      border-radius: 8px;
      line-height: 16px;
      font-weight: 700;
      color: #FFF;
      text-align: center;
      background-color: #FD4B78;
      min-width: 16px;
      font-size: 12px;
      margin-left: 4px;
      padding-left: 4px;
      padding-right: 4px;
      margin-top: -2px; }
  .btn--outline {
    display: inline-block;
    border-radius: 2px;
    border: solid 1px #DFE3F0;
    background-color: #ffffff;
    color: #52738A !important;
    font-weight: normal;
    font-size: 12px;
    height: 22px;
    line-height: normal;
    padding: 2px 8px 2px 4px; }
    .btn--outline img {
      float: left;
      margin-top: 2px;
      margin-right: 4px; }
  .btn--claimprofile {
    background-color: #042280;
    color: #FFF !important;
    font-size: 12px;
    border-left: 4px solid #fd4b78 !important;
    height: 39px;
    padding: 0px 20px !important;
    white-space: nowrap;
    line-height: 39px; }
    .btn--claimprofile__large {
      display: flex;
      font-size: 16px;
      font-weight: normal !important;
      background-color: transparent;
      border-left: none !important;
      padding: 0px !important;
      border-radius: 0px !important; }
      @media screen and (max-width: 500px) {
        .btn--claimprofile__large {
          font-size: 12px; } }
      .btn--claimprofile__large__title {
        color: #FFF;
        height: 40px;
        background-color: #FD4B78;
        border-right: 1px solid #be3759;
        padding: 0px 10px 0px 16px;
        font-weight: bold;
        border-radius: 4px 0px 0px 4px; }
      .btn--claimprofile__large__text {
        padding-left: 10px;
        color: #FFF;
        height: 40px;
        background-color: #FD4B78;
        padding: 0px 3px 0px 10px;
        border-radius: 0px; }
  .btn--icon:before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-top: -4px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    vertical-align: middle;
    margin-right: 4px; }
  .btn--icon--onlyicon {
    width: 25px;
    padding: 0px !important;
    font-size: 1px !important; }
    .btn--icon--onlyicon:before {
      margin-right: auto;
      margin-left: auto; }
  .btn--icon--placeholder:before {
    background-image: url(../images/icons/16x16/placeholder.svg); }
  .btn--icon--favorite:before {
    background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/heart_outline.svg); }
  .btn--icon--dot_dot_dot:before {
    background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/dot_dot_dot.svg); }
  .btn--icon--filters:before {
    background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters.svg); }
  .btn--icon--share:before {
    background-image: url(https://content.harstatic.com/media/icons/share_slate_16.svg); }
  .btn--icon--map_view:before {
    background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/map-view.svg); }
  .btn--icon--gallery:before {
    background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/photo-gallery.svg); }
  .btn--icon--street_view:before {
    background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/street-view.svg); }
  .btn--icon--close:before {
    background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/close_medium_gra.svg); }
  .btn--icon--add:before {
    background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/add.svg); }
  .btn--icon--add-white:before {
    background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/add-negative.svg); }
  .btn--icon--edit:before {
    background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/edit.svg); }
  .btn--icon--edit-white:before {
    background-image: url(https://content.harstatic.com/media/icons/edit_white.svg); }
  .btn--icon--delete-red:before {
    background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/delete_mini.svg); }
  .btn--icon--delete-auxiliary:before {
    background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/delete-small_auxilary.svg); }
  .btn--icon--delete-white:before {
    background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/delete-white.svg); }
  .btn--icon--external-link:before {
    background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/external-link.svg); }
  .btn--icon--download:before {
    background-image: url(https://content.harstatic.com/media/icons/import.svg); }
  .btn--icon--email:before {
    background-image: url(https://content.harstatic.com/media/icons/email-lead.svg); }
  .btn--icon--email-white:before {
    background-image: url(https://content.harstatic.com/media/icons/email_small_white_.svg); }
  .btn--icon--comment:before {
    background-image: url(https://content.harstatic.com/media/icons/comment_.svg); }
  .btn--icon--lock:before {
    background-image: url(https://content.harstatic.com/media/icons/lock.svg); }
  .btn--icon--view:before {
    background-image: url(https://content.harstatic.com/media/icons/view_color_slate.svg); }
  .btn--icon--duplicate:before {
    background-image: url(https://content.harstatic.com/media/icons/icon-duplicate.svg); }
  .btn--icon--save-white:before {
    background-image: url(https://content.harstatic.com/media/icons/save-data-white.svg); }
  .btn--icon--receipt:before {
    background-image: url(https://content.harstatic.com/media/icons/icon-receipt.svg); }
  .btn--icon--folder:before {
    background-image: url(https://content.harstatic.com/media/icons/icon-open.svg); }
  .btn--icon--upload:before {
    background-image: url(https://content.harstatic.com/media/icons/upload-white.svg); }
  .btn--icon--home:before {
    background-image: url(https://content.harstatic.com/media/icons/icon-listing.svg); }
  .btn--icon--remarks:before {
    background-image: url(https://content.harstatic.com/media/icons/icon-agent-remarks.svg); }
  .btn--icon--drive:before {
    background-image: url(https://content.harstatic.com/media/icons/icon-drive-directions.svg); }
  .btn--icon--print:before {
    background-image: url(https://content.harstatic.com/media/icons/icon-print.svg); }
  .btn--icon--lone:before {
    margin-right: 0; }
  .btn--icon--lone.btn--large {
    padding: 0 16px !important; }
  .btn--icon--lone.btn--medium {
    padding: 0 12px !important; }
  .btn--icon--lone.btn--small {
    padding: 0 8px !important; }
  .btn--icon--lone.btn--small-extra {
    padding: 0 4px !important; }
  @media screen and (max-width: 576px) {
    .btn--icon--sm-none:before {
      content: none; } }
  .btn--remove {
    background-color: #515b7a;
    height: 24px;
    padding: 0 8px 0 8px;
    border-radius: 4px;
    background-color: #515b7a;
    color: #FFF !important;
    font-size: 12px;
    border: none;
    box-shadow: none; }
    .btn--remove img {
      width: 10px;
      margin-right: 4px; }

.category_link,
a.category_link {
  display: inline-block;
  color: #042280;
  border: 1px solid #DDDDDD;
  padding: 5px 8px;
  border-radius: 2px;
  font-weight: 600;
  text-decoration: none !important;
  margin: 0px 5px 5px 0px; }
  .category_link:hover,
  a.category_link:hover {
    border: 1px solid #AFB8D9;
    transition: all 0.2s ease !important; }

.filterpill {
  border-radius: 18px;
  background-color: #dfe3f0;
  height: 38px;
  background-color: #DFE3F0;
  color: #042280;
  font-size: 12px;
  font-weight: 600;
  border: none;
  display: inline-block;
  padding: 9px 34px 9px 16px;
  position: relative;
  line-height: 1; }
  .filterpill:after {
    content: "";
    position: absolute;
    right: 11px;
    top: 11px;
    width: 16px;
    height: 16px;
    background: url(https://content.harstatic.com/resource_2019/imgs/icons/pluse_wite_circle.svg) no-repeat center center; }
  .filterpill--active {
    background-color: #042280;
    color: #FFF; }
    .filterpill--active:after {
      background: url(https://content.harstatic.com/resource_2019/imgs/icons/pencile_edit.svg) no-repeat center center; }
  .filterpill--closeable {
    background-color: #042280;
    color: #FFF;
    line-height: 18px;
    display: inline-block; }
    .filterpill--closeable:after {
      background: none;
      content: none; }
    .filterpill--closeable a {
      display: block;
      position: absolute;
      right: 11px;
      top: 11px;
      width: 16px;
      height: 16px;
      background: url(https://content.harstatic.com/resource_2019/imgs/icons/cross_with_whitebg.svg) no-repeat center center; }
  .filterpill--all {
    background-color: #042280;
    color: #FFF;
    padding: 9px 16px 9px 16px; }
    .filterpill--all span {
      display: inline-block;
      border-radius: 50%;
      background-color: #FD4B78;
      height: 16px;
      width: 16px;
      line-height: 16px;
      text-align: center;
      font-size: 11px;
      margin-left: 6px; }
    .filterpill--all:after {
      content: none;
      background: none; }
  .filterpill:disabled {
    opacity: 0.5; }

.iconpill {
  border-radius: 18px;
  background-color: #dfe3f0;
  height: 38px;
  background-color: #DFE3F0;
  color: #042280;
  font-size: 12px;
  font-weight: 600;
  border: none;
  display: inline-block;
  padding: 9px 42px 9px 16px;
  position: relative;
  line-height: 1;
  transition-duration: 0.6s;
  transition-property: all;
  transition-timing-function: ease; }
  .iconpill span {
    display: block;
    position: absolute;
    right: 7px;
    top: 7px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #ffffff;
    line-height: 23px; }
  .iconpill:hover {
    opacity: 0.5; }

.folder {
  background-color: #F3F4F7;
  border-radius: 2px;
  height: 24px;
  line-height: 24px;
  font-size: 12px;
  color: #212529;
  display: inline-block;
  position: relative;
  padding-left: 6px;
  padding-right: 22px;
  margin-bottom: 5px;
  margin-right: 5px; }
  .folder--closeable a {
    display: block;
    position: absolute;
    right: 2px;
    top: 0px;
    width: 18px;
    height: 24px;
    margin-left: 4px;
    opacity: 45%;
    background: url("https://content.harstatic.com/media/icons/cross_auxilary_small.svg") no-repeat right 5px center;
    background-size: 8px; }

.alphabets_filter {
  overflow: hidden;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  white-space: nowrap;
  background-color: #ffffff;
  border-radius: 4px;
  padding-bottom: 15px; }
  .alphabets_filter ul {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    border: solid 1px #042280;
    display: block;
    border-radius: 4px;
    margin: 0px;
    display: inline-flex;
    align-self: center;
    overflow: hidden; }
    .alphabets_filter ul li {
      display: block;
      margin: 0px;
      padding: 0px; }
      .alphabets_filter ul li a {
        display: block;
        width: 41px;
        height: 48px;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        color: #212529;
        font-weight: 600;
        line-height: 48px;
        overflow: hidden;
        border-right: 1px solid #dddddd;
        border-bottom: 1px solid #fff; }
        .alphabets_filter ul li a:hover {
          border-bottom: 1px solid #FD4B78;
          background-color: #042280;
          color: #FFF; }
        .alphabets_filter ul li a.active {
          border-bottom: 1px solid #FD4B78;
          background-color: #042280;
          color: #FFF; }
        .alphabets_filter ul li a.disable {
          background-color: #F3F4F7 !important;
          color: rgba(93, 94, 94, 0.56) !important;
          border-bottom: 1px solid #F3F4F7 !important; }

.position-wrapper {
  position: relative;
  display: inline-block;
  width: 100%; }

.popover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.24);
  border: solid 1px #DFE3F0;
  opacity: 1;
  position: absolute; }
  .popover--standard {
    min-width: 300px;
    left: 50%;
    margin-left: -150px;
    top: 50px; }
    .popover--standard_large {
      min-width: 448px;
      margin-left: -224px; }
    .popover--standard .popover-header {
      background-color: #F3F4F7;
      color: #515B7A;
      border-bottom: 1px solid #AFB8D9;
      font-size: 14px;
      font-weight: 600;
      position: relative;
      padding: 0.35rem 0.75rem; }
      .popover--standard .popover-header:before {
        content: "";
        position: absolute;
        left: calc(50% - 13px);
        top: -10px;
        width: 0;
        height: 0;
        border-left: 13px solid transparent;
        border-right: 13px solid transparent;
        border-bottom: 13px solid #F3F4F7; }
    .popover--standard .popover-footer {
      box-shadow: 0 4px 8px 0 rgba(61, 84, 153, 0.4);
      background-color: #ffffff;
      padding: 15px;
      position: absolute;
      left: 0px;
      right: 0px;
      bottom: 0px; }
  .popover .popover-body {
    height: 100%;
    max-height: 50vh;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 32px;
    font-size: 12px; }
  .popover--shapeless {
    width: 300px;
    max-width: 300px;
    left: 0px;
    top: 50px;
    border: none; }
    .popover--shapeless_close {
      display: block;
      width: 26px;
      height: 26px;
      position: absolute;
      left: auto;
      right: 5px;
      top: 10px;
      text-align: center;
      z-index: +1; }
    .popover--shapeless .popover-header {
      background-color: transparent;
      color: #212529;
      border-bottom: none;
      font-size: 11px;
      font-weight: 700;
      position: relative;
      padding: 7px 16px;
      text-align: left !important; }
      .popover--shapeless .popover-header:before {
        content: none; }
    .popover--shapeless .popover-body {
      padding: 10px 15px 25px 15px; }
  .popover--agents .popover-body {
    padding: 8px;
    font-size: 12px;
    text-align: center; }
  .popover--agents span {
    font-size: 12px;
    font-weight: 700;
    color: #515B7A;
    line-height: 1; }

.range {
  margin: 15px 0px 0px 0px;
  padding: 0px; }
  .range--item {
    padding: 0px;
    margin: 0px -4px 0px 0px;
    width: 40px;
    height: 40px;
    display: inline-block; }
    .range--item span {
      border-radius: 50%;
      display: block;
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 40px; }
    .range--item_min span, .range--item_max span, .range--item_range span {
      background-color: #0738CD;
      color: #FFF; }
    .range--item_range {
      background-color: #94AAEB; }
      .range--item_range span {
        background-color: #94AAEB;
        color: #000; }
    .range--item_min, .range--item_max {
      position: relative; }
      .range--item_min:before, .range--item_max:before {
        display: block;
        content: "";
        position: absolute;
        width: 50%;
        z-index: -1;
        height: 100%;
        left: auto;
        right: 0px;
        top: 0px;
        bottom: 0px;
        background-color: #94AAEB; }
    .range--item_max:before {
      left: 0px;
      right: auto; }

.tag_status {
  background: #ccc;
  padding: 1px 4px;
  border-radius: 2px;
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  cursor: default; }
  .tag_status--available {
    background-color: #E5FFF9;
    color: #018361; }
  .tag_status--sold {
    background-color: #FFD8D8;
    color: #CC0000; }
  .tag_status--pending {
    background-color: #FDF7CF;
    color: #FBA000; }
  .tag_status--not_for_sale {
    background-color: #F3F4F7;
    color: #5D5E5E; }
  .tag_status--info:after {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    background: url(../images/icon-info-yellow.svg);
    background-size: contain;
    margin-left: 4px; }

.table_wrapper {
  position: relative; }
  .table_wrapper:before {
    content: "";
    width: 50px;
    height: 100%;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8));
    position: absolute;
    top: 0;
    right: -1px;
    pointer-events: none; }
  .table_wrapper__inner {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch; }

.table {
  text-align: left;
  border-collapse: collapse;
  overflow-x: auto; }
  @media screen and (max-width: 480px) {
    .table {
      display: block; } }
  .table td {
    white-space: nowrap; }
  .table th {
    white-space: nowrap; }
  .table caption {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    height: 1px;
    width: 1px;
    overflow: hidden; }
  .table tfoot tr td {
    background-color: rgba(237, 240, 250, 0.48);
    font-weight: 700; }
  .table--v-middle td {
    vertical-align: middle !important; }
  .table--medium {
    font-size: 12px;
    line-height: 16px; }
    .table--medium td {
      padding: 10px 10px 10px 0;
      color: #3B5363;
      border-top-color: #DFE3F0; }
    .table--medium tr:last-child td {
      border-bottom: 1px solid #DFE3F0; }
    .table--medium thead th {
      color: #212529;
      font-weight: 600;
      padding: 10px 10px 10px 0;
      border-top: none;
      border-bottom: 1px solid #212529;
      text-transform: uppercase; }
  .table--small {
    font-size: 12px;
    line-height: 16px; }
    .table--small td {
      padding: 4px 4px 4px 0px;
      color: #3B5363;
      border-top-color: #DFE3F0; }
    .table--small tr:last-child td {
      border-bottom: 1px solid #DFE3F0; }
    .table--small thead th {
      color: #212529;
      font-weight: 600;
      padding: 4px 0px;
      border-top: none;
      border-bottom: 1px solid #212529; }
  .table__description_highlighted {
    color: #212529;
    font-weight: 600;
    padding-right: 2px; }
  .table--border {
    margin-bottom: 0px; }
    .table--border td {
      color: #515B7A;
      border: 1px solid #DFE3F0;
      vertical-align: middle;
      text-align: center;
      padding: 15px; }
    .table--border tr:first-child td {
      border-top: none; }
    .table--border tr:last-child td {
      border-bottom: none; }
    .table--border tr td:last-child {
      border-right: none; }

.table--border_wrapper {
  border-radius: 4px;
  border: 1px solid #DFE3F0;
  overflow: hidden; }

.table_withpadding tr
td {
  padding: 12px; }

.table--striped tbody tr:nth-of-type(2n+1) {
  background-color: rgba(237, 240, 250, 0.48); }

.nav-tabs--negative, .nav-tabs--simple, .nav-tabs--underline {
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  -moz-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  border-bottom: none;
  white-space: nowrap;
  flex-wrap: nowrap; }
  .nav-tabs--negative .nav-item, .nav-tabs--simple .nav-item, .nav-tabs--underline .nav-item {
    margin-bottom: 0px; }
  .nav-tabs--negative .nav-link, .nav-tabs--simple .nav-link, .nav-tabs--underline .nav-link {
    border: none;
    border-bottom: 2px solid #DAE1F8;
    color: #515B7A;
    font-weight: 500;
    font-size: 14px;
    text-transform: uppercase;
    padding: 8px 20px;
    border-radius: 0px;
    white-space: nowrap;
    margin-bottom: 0px; }
    .nav-tabs--negative .nav-link span, .nav-tabs--simple .nav-link span, .nav-tabs--underline .nav-link span {
      border-radius: 14px;
      display: inline-block;
      background-color: #DFE3F0;
      color: #515B7A;
      height: 16px;
      line-height: 16px;
      font-size: 11px;
      margin: 0px 0px 0px 6px;
      text-align: center;
      padding: 0px 4px; }
    .nav-tabs--negative .nav-link.active, .nav-tabs--simple .nav-link.active, .nav-tabs--underline .nav-link.active {
      border-bottom: 2px solid #0738CD;
      color: #0738CD;
      font-weight: 500;
      background-color: transparent; }
.nav-tabs--simple .nav-link {
  border-bottom: 2px solid #FFF;
  color: #0738CD;
  font-weight: 400;
  text-transform: capitalize;
  padding: 14px 20px; }
  .nav-tabs--simple .nav-link.active {
    border-bottom: 2px solid #0738CD;
    color: #0738CD;
    font-weight: 400; }
.nav-tabs--negative .nav-link {
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  color: #FFF; }
  .nav-tabs--negative .nav-link span {
    background-color: #DFE3F0;
    color: #FFF; }
  .nav-tabs--negative .nav-link.active {
    border-bottom: 2px solid #FFF;
    color: #FFF;
    padding-bottom: 7px; }

.modal {
  z-index: 105000; }
  .modal--full-width .modal-xl {
    max-width: 100%;
    margin: 35px; }
    @media (max-width: 576px) {
      .modal--full-width .modal-xl {
        margin: 1.5rem;
        max-height: calc(100% - 3rem) !important; } }
  .modal--medium .modal-lg {
    max-width: 892px; }
    @media (max-width: 970px) {
      .modal--medium .modal-lg .modal-content {
        margin: 1.0rem;
        width: calc(100% - 2rem); } }
  .modal--small .modal-sm {
    max-width: 526px; }
    @media (max-width: 970px) {
      .modal--small .modal-sm .modal-content {
        margin: 1.0rem;
        width: calc(100% - 2rem); } }
  .modal .close {
    opacity: 1;
    position: absolute;
    right: 17px; }
    .modal .close span {
      display: block;
      width: 16px;
      height: 16px;
      background-image: url("https://content.harstatic.com/media/icons/icon-close-auxiliary.svg");
      background-repeat: no-repeat;
      background-position: center center; }
  .modal .modal-content {
    box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.24); }
  .modal .modal-title {
    font-size: 24px;
    line-height: 32px;
    color: #042280;
    font-weight: 700;
    width: 100%;
    text-align: center;
    align-self: center; }
  .modal .modal-header {
    height: 80px;
    border-bottom: 1px solid #DFE3F0; }
  .modal .modal-footer {
    border-top: 1px solid #DFE3F0;
    justify-content: center; }
  .modal .modal-body {
    padding: 40px;
    font-size: 14px; }

.modal-backdrop {
  z-index: 10400; }

/* form label */
label {
  color: #515B7A;
  font-size: 12px;
  font-weight: 700;
  text-align: left;
  display: block; }

/* form control */
.form-control {
  border: 1px solid #AFB8D9;
  font-size: 14px;
  color: #212529 !important;
  height: 40px;
  padding: 12px; }
  .form-control::-ms-input-placeholder, .form-control::-webkit-input-placeholder, .form-control::-moz-placeholder, .form-control:-ms-input-placeholder, .form-control:-moz-placeholder, .form-control::placeholder {
    color: rgba(0, 0, 0, 0.24) !important; }
  .form-control:disabled, .form-control[readonly] {
    cursor: not-allowed;
    background-color: #EDF0FA;
    opacity: 0.75;
    -webkit-opacity: 0.75 !important;
    -moz-opacity: 0.75 !important; }
  .form-control--textarea {
    height: auto !important; }
  @media screen and (max-width: 768px) {
    .form-control {
      font-size: 16px; } }
  .form-control--small {
    height: 32px;
    padding: 8px;
    font-size: 12px; }
  .form-control--large {
    height: 48px;
    padding: 16px;
    font-size: 16px; }
  .form-control--withicon {
    background-color: #ffffff;
    background-repeat: no-repeat;
    background-position: left 10px center;
    padding: 12px 12px 12px 36px; }

/* form input quick search */
.input-group--search_input_home, .input-group--search_input_medium {
  margin-bottom: 24px; }
  .input-group--search_input_home .form-control, .input-group--search_input_medium .form-control {
    height: 74px;
    font-size: 18px;
    padding: 0 24px;
    border-radius: 4px; }
    .input-group--search_input_home .form-control::placeholder, .input-group--search_input_medium .form-control::placeholder {
      color: rgba(0, 0, 0, 0.24); }
    .input-group--search_input_home .form-control:focus, .input-group--search_input_medium .form-control:focus {
      border-color: #0738CD;
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0); }
  .input-group--search_input_home .btn, .input-group--search_input_medium .btn {
    height: 72px;
    width: 72px;
    background-image: url("https://content.harstatic.com/resource_2019/imgs/home/search_white_small.svg") !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    background-size: 20px 20px !important; }
    .input-group--search_input_home .btn:active, .input-group--search_input_medium .btn:active {
      height: 74px;
      transform: translate(0, 0); }
@media screen and (max-width: 600px) {
  .input-group .form-control, .input-group .btn {
    height: 64px; } }
.input-group--search_input_medium .form-control {
  height: 48px !important;
  font-size: 16px;
  padding: 0 16px;
  max-width: 504px; }
.input-group--search_input_medium .btn {
  height: 46px;
  width: 46px; }
  .input-group--search_input_medium .btn:active {
    height: 48px;
    transform: translate(0, 0); }
.input-group--search_input_map {
  border-radius: 18px;
  background-color: #dfe3f0; }
  .input-group--search_input_map .form-control {
    border-radius: 18px;
    background-color: #dfe3f0;
    height: 38px;
    background-color: #DFE3F0;
    color: #515B7A;
    font-size: 14px;
    font-weight: 400;
    border: none;
    display: inline-block;
    padding: 9px 9px 9px 16px;
    position: relative;
    line-height: 1; }
    .input-group--search_input_map .form-control::placeholder {
      color: rgba(0, 0, 0, 0.24); }
    .input-group--search_input_map .form-control:focus {
      border-color: #0738CD;
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0); }
  .input-group--search_input_map .btn {
    width: 24px;
    height: 24px;
    border-radius: 50% !important;
    background-color: #ffffff;
    margin: 7px;
    background-image: url("https://content.harstatic.com/media/icons/forbuttons/buttons-special-search.svg");
    background-repeat: no-repeat;
    background-position: center; }
.input-group--custom {
  border: 1px solid #AFB8D9;
  font-size: 14px;
  color: #212529 !important;
  border-radius: 0.25rem; }
  .input-group--custom .input-group-text {
    background-color: #EDF0FA;
    color: #3B5363;
    border: none;
    font-size: 14px;
    padding-left: 12px;
    padding-right: 12px; }
  .input-group--custom .form-control {
    border: none; }
  @media screen and (max-width: 600px) {
    .input-group--custom .form-control, .input-group--custom .btn {
      height: auto; } }

/* input checkbox */
.custom-checkbox .custom-control-input {
  left: -0px;
  top: 4px;
  z-index: 1; }
.custom-checkbox .custom-control-label {
  color: #212529;
  font-size: 12px;
  font-weight: 400;
  padding: 2px 0px 0px 3px;
  cursor: pointer;
  margin: 0px 15px 10px 0px; }
.custom-checkbox .custom-control-label::before {
  background-color: transparent;
  background-image: url("https://content.harstatic.com/resource_2019/imgs/icons/checkbox-box-empty.svg");
  width: 16px;
  height: 16px;
  border: none; }
.custom-checkbox .custom-control-label::after {
  display: none; }
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: transparent;
  background-image: url("https://content.harstatic.com/resource_2019/imgs/icons/checkbox-box-checked.svg"); }
.custom-checkbox .custom-control-input:disabled ~ .custom-control-label {
  cursor: not-allowed !important;
  opacity: 50%;
  -webkit-opacity: 0.5 !important;
  -moz-opacity: 0.5 !important; }
.custom-checkbox_with-description .custom-control-label {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
  padding-top: 0px; }
.custom-checkbox_with-description span {
  font-weight: 400;
  color: #515B7A;
  font-size: 12px;
  text-align: left;
  padding-left: 2px;
  display: block;
  line-height: 16px; }
.custom-checkbox__outline {
  position: relative;
  padding: 0px; }
  .custom-checkbox__outline .custom-control-label {
    padding: 12px 12px 12px 48px;
    margin: 0px;
    z-index: 11111; }
    .custom-checkbox__outline .custom-control-label_title {
      font-weight: 600;
      color: #212529;
      font-size: 14px;
      padding-bottom: 0px;
      display: block; }
    .custom-checkbox__outline .custom-control-label_info {
      color: #52738A; }
      .custom-checkbox__outline .custom-control-label_info span {
        display: inline-block; }
    .custom-checkbox__outline .custom-control-label:before {
      left: 16px;
      top: 20px; }
    .custom-checkbox__outline .custom-control-label:after {
      content: "";
      position: absolute;
      left: 0px;
      right: 0px;
      top: 0px;
      bottom: 0px;
      display: block;
      width: 100%;
      height: 100%;
      z-index: -1;
      border-bottom: 1px solid #EDF0FA; }
  .custom-checkbox__outline .custom-control-input:checked ~ .custom-control-label:after {
    background-image: none !important;
    background-color: #F3F4F7; }
.custom-checkbox-row {
  font-size: 12px;
  padding-left: 0px;
  border-bottom: 1px solid #dee2e6 !important; }
  .custom-checkbox-row .custom-control-label {
    margin: 0px 0px 6px 0px;
    padding: 6px 17px 0px 0px;
    color: #3B5363; }
  .custom-checkbox-row .custom-control-label::before {
    background: none;
    background-color: transparent !important;
    background-position: center center;
    width: 20px;
    height: 20px;
    border: none;
    right: 0px;
    left: auto;
    background-size: cover; }
  .custom-checkbox-row .custom-control-label::after {
    display: none; }
  .custom-checkbox-row .custom-control-input:checked ~ .custom-control-label {
    font-weight: 700;
    color: #212529; }
    .custom-checkbox-row .custom-control-input:checked ~ .custom-control-label::before {
      background-color: transparent !important;
      background-image: url("https://content.harstatic.com/media/icons/icon-option-selected-black2.svg"); }
  .custom-checkbox-row-inverse {
    border-bottom: 1px solid rgba(255, 255, 255, 0.17) !important; }
    .custom-checkbox-row-inverse .custom-control-label {
      color: #FFF; }
    .custom-checkbox-row-inverse .custom-control-input:checked ~ .custom-control-label {
      color: #FFF; }
      .custom-checkbox-row-inverse .custom-control-input:checked ~ .custom-control-label::before {
        background-image: url("https://content.harstatic.com/media/icons/check_small_white.svg");
        background-size: 13px;
        background-repeat: no-repeat;
        background-position: 0px 10px; }
.custom-checkbox--negative .custom-control-label {
  color: #FFF !important;
  margin: 0px 15px 10px 0px; }
.custom-checkbox--negative .custom-control-input:checked ~ .custom-control-label {
  color: #FFF !important; }
.custom-checkbox--negative .custom-control-input:disabled ~ .custom-control-label {
  color: #AFB8D9 !important;
  opacity: 0.45;
  -webkit-opacity: 0.45 !important;
  -moz-opacity: 0.45 !important; }
.custom-checkbox--negative .custom-control-input:disabled ~ .custom-control-label::before {
  background-color: inherit !important; }

/* input radio */
.custom-radio .custom-control-input {
  left: -0px;
  top: 4px;
  z-index: 1; }
.custom-radio .custom-control-label {
  color: #212529;
  font-size: 12px;
  font-weight: 400;
  padding: 2px 0px 0px 3px;
  cursor: pointer;
  margin: 0px 15px 10px 0px; }
.custom-radio .custom-control-label::before {
  background-color: transparent;
  background-image: url("https://content.harstatic.com/media/icons/radiosimple.svg");
  width: 16px;
  height: 16px;
  border: none; }
.custom-radio .custom-control-label::after {
  display: none; }
.custom-radio .custom-control-input:checked ~ .custom-control-label {
  font-weight: 600; }
  .custom-radio .custom-control-input:checked ~ .custom-control-label::before {
    background-color: transparent;
    background-image: url("https://content.harstatic.com/media/icons/radiosimple_checked.svg"); }
.custom-radio .custom-control-input:disabled ~ .custom-control-label {
  cursor: not-allowed !important; }
.custom-radio--large .custom-control-label {
  font-size: 18px;
  font-weight: 600;
  padding: 1px 0px 0px 7px;
  line-height: normal;
  margin: 0px 15px 10px 0px;
  color: #515B7A; }
  @media screen and (max-width: 786px) {
    .custom-radio--large .custom-control-label {
      font-size: 12px;
      padding: 4px 0px 0px 5px; } }
.custom-radio--large .custom-control-label::before {
  width: 18px;
  height: 18px;
  background-size: 18px; }
  @media screen and (max-width: 786px) {
    .custom-radio--large .custom-control-label::before {
      width: 16px;
      height: 16px;
      background-size: 16px; } }
.custom-radio--large .custom-control-input:checked ~ .custom-control-label {
  color: #042280; }
.custom-radio--negative .custom-control-label {
  color: #AFB8D9;
  margin: 0px 15px 10px 0px; }
.custom-radio--negative .custom-control-input:checked ~ .custom-control-label {
  color: #FFF !important; }
.custom-radio--negative .custom-control-input:disabled ~ .custom-control-label {
  color: #AFB8D9 !important;
  opacity: 0.45;
  -webkit-opacity: 0.45 !important;
  -moz-opacity: 0.45 !important; }
.custom-radio--negative .custom-control-label::before {
  background-color: transparent;
  background-image: url("https://content.harstatic.com/resource_2019/imgs/home/radiosimple.svg"); }
.custom-radio--negative .custom-control-input:disabled ~ .custom-control-label::before {
  background-color: inherit !important; }
@media screen and (max-width: 600px) {
  .custom-radio--negative {
    border-radius: 16px;
    border: solid 1px rgba(255, 255, 255, 0.24);
    background-color: rgba(255, 255, 255, 0);
    padding: 4px 26px; }
    .custom-radio--negative .custom-control-label {
      margin: 0px; } }
.custom-radio-row {
  font-size: 12px;
  padding-left: 0px; }
  .custom-radio-row .custom-control-label {
    margin: 0px 0px 6px 0px;
    padding: 6px 26px 0px 0px;
    color: #3B5363; }
  .custom-radio-row .custom-control-label::before {
    background: none;
    background-color: transparent !important;
    background-position: center center;
    width: 20px;
    height: 20px;
    border: none;
    right: 0px;
    left: auto;
    background-size: cover; }
  .custom-radio-row .custom-control-label::after {
    display: none; }
  .custom-radio-row .custom-control-input:checked ~ .custom-control-label {
    font-weight: 700;
    color: #212529; }
    .custom-radio-row .custom-control-input:checked ~ .custom-control-label::before {
      background-color: transparent !important;
      background-image: url("https://content.harstatic.com/media/icons/icon-option-selected-black2.svg"); }

/* cusotm select */
.custom-select {
  border: 1px solid #AFB8D9;
  background: #FFF url("https://content.harstatic.com/resource_2019/imgs/icons/select_arrow.svg") no-repeat right 0.75rem center/10px 9px !important;
  color: #52738A;
  text-align: left; }
  .custom-select_large_extra {
    height: 48px !important;
    font-size: 16px !important;
    padding: 6px 26px 6px 12px; }
  .custom-select_large {
    height: 40px !important;
    font-size: 14px !important;
    padding: 6px 26px 6px 12px; }
  .custom-select_medium {
    height: 32px !important;
    font-size: 12px !important; }

.dropdown--custom .dropdown-toggle {
  border: 1px solid #AFB8D9;
  background-color: #FFF;
  border-radius: 0.25rem;
  color: #52738A;
  text-align: left; }
  .dropdown--custom .dropdown-toggle:after {
    float: right;
    background: url("https://content.harstatic.com/resource_2019/imgs/icons/select_arrow.svg") no-repeat right 10px;
    border: none !important;
    width: 24px;
    height: 24px; }
.dropdown--custom .dropdown-menu {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.24);
  border: solid 1px #dfe3f0;
  background-color: #ffffff;
  min-width: 200px; }
.dropdown--custom_large .dropdown-toggle {
  height: 40px;
  width: 100%;
  padding: 6px 15px;
  font-size: 14px; }
.dropdown--custom_medium .dropdown-toggle {
  height: 32px;
  font-size: 12px !important;
  padding: 6px 13px; }
  .dropdown--custom_medium .dropdown-toggle:after {
    background-position: right 6px; }
.dropdown--custom_bold .dropdown-toggle {
  height: 32px;
  font-size: 14px !important;
  color: #0738CD !important;
  font-weight: 700;
  padding: 4px 8px; }
  .dropdown--custom_bold .dropdown-toggle:after {
    background-position: right 8px;
    width: 18px; }
.dropdown--custom_strong .dropdown-toggle {
  height: 32px;
  font-size: 14px !important;
  color: #0738CD !important;
  font-weight: 700;
  padding: 4px 8px;
  border: none; }
  .dropdown--custom_strong .dropdown-toggle:after {
    background-position: right 8px;
    width: 18px; }
.dropdown--custom__simple .dropdown-toggle {
  border: none;
  background-color: transparent;
  border-radius: 0;
  color: #52738A;
  font-weight: normal !important;
  padding-right: 16px !important;
  text-align: left;
  text-decoration: none;
  position: relative; }
  .dropdown--custom__simple .dropdown-toggle:after {
    float: right;
    position: absolute;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background: url("https://content.harstatic.com/media/icons/select_arrow_auxilary.svg") no-repeat;
    background-position: center center;
    border: none !important;
    width: 14px;
    height: auto;
    background-size: 8px !important; }
.dropdown--custom__simple.show .dropdown-toggle:after {
  background: url("https://content.harstatic.com/media/icons/select_arrow_auxilary_up.svg") no-repeat !important;
  background-position: center center !important;
  background-size: 8px !important; }
.dropdown--custom__simple_invers .dropdown-toggle:after {
  width: 15px;
  height: 15px;
  background: url("https://content.harstatic.com/media/icons/dropdown_arrow_white.svg") no-repeat right 8px;
  background-size: 8px !important; }
.dropdown--custom__simple_invers.show .dropdown-toggle:after {
  background: url("https://content.harstatic.com/media/icons/dropdown_arrow_white_2.svg") no-repeat right 8px;
  background-size: 8px !important; }
.dropdown.show .dropdown-toggle:after {
  background: url("https://content.harstatic.com/media/icons/select_arrow_2.svg") no-repeat right 6px; }

/* custom checkbox */
.choosable_box {
  padding-left: 0px !important; }
  .choosable_box--choosable_box {
    position: relative; }
    .choosable_box--choosable_box .custom-control-label {
      border: 1px solid #DFE3F0;
      border-radius: 4px;
      height: 48px;
      overflow: hidden;
      display: inline-block;
      margin: 2px;
      font-size: 11px;
      text-align: center;
      cursor: pointer;
      color: #212529;
      font-weight: 600;
      padding-bottom: 7px;
      position: relative;
      padding-top: 26px;
      width: 100%; }
      .choosable_box--choosable_box .custom-control-label:hover {
        border: 1px solid #AFB8D9; }
      .choosable_box--choosable_box .custom-control-label:before {
        box-shadow: none !important;
        background-color: transparent !important;
        display: block;
        position: absolute;
        content: "";
        width: 32px;
        height: 16px;
        margin-top: 2px;
        margin-bottom: 3px;
        left: 50%;
        top: 5px;
        margin-left: -16px;
        border: none; }
    .choosable_box--choosable_box--single_family .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/Icons_Single_Family.svg); }
    .choosable_box--choosable_box--multi_family .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/Icons_Multi_Family.svg); }
    .choosable_box--choosable_box--townhouse .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/Icons_Townhouse.svg); }
    .choosable_box--choosable_box--condominium .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/Icons_Condominium.svg); }
    .choosable_box--choosable_box--lots_lands .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/Icons_LotsLands.svg); }
    .choosable_box--choosable_box--acreage_homes .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/Icons_AcreageHomes.svg); }
    .choosable_box--choosable_box--yard .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/icons_yard.svg); }
    .choosable_box--choosable_box--wheelchair_access .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/icons_wheelchair-access.svg); }
    .choosable_box--choosable_box--waterfront .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/icons_waterfront.svg); }
    .choosable_box--choosable_box--tennis_area .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/icons_tennis-area.svg); }
    .choosable_box--choosable_box--study_room .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/icons_study-room.svg); }
    .choosable_box--choosable_box--sprinkler .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/icons_sprinkler.svg); }
    .choosable_box--choosable_box--spa_hot_tub .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/icons_spa-hot-tub.svg); }
    .choosable_box--choosable_box--private_pool .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/icons_private-pool.svg); }
    .choosable_box--choosable_box--patio .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/icons_patio.svg); }
    .choosable_box--choosable_box--media_room .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/icons_media-room.svg); }
    .choosable_box--choosable_box--garage .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/icons_garage.svg); }
    .choosable_box--choosable_box--energy_features .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/icons_energy-features.svg); }
    .choosable_box--choosable_box--elevator .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/icons_elevator.svg); }
    .choosable_box--choosable_box--controlled_access .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/icons_controlled-access.svg); }
    .choosable_box--choosable_box--price_reduced .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/icons_price-reduced.svg); }
    .choosable_box--choosable_box--open_house .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/icons_open-house.svg); }
    .choosable_box--choosable_box--new_listing .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/icons_new-listing.svg); }
    .choosable_box--choosable_box--new_constructions .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/icons_new-constructions.svg); }
    .choosable_box--choosable_box--lake .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/Lake.svg); }
    .choosable_box--choosable_box--InGolfCommunity .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/InGolfCommunity.svg); }
    .choosable_box--choosable_box--GreenCertification .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/GreenCertification.svg); }
    .choosable_box--choosable_box--Cul-de-Sac .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/Cul-de-Sac.svg); }
    .choosable_box--choosable_box--Corner .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/Corner.svg); }
    .choosable_box--choosable_box--Wooded .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/Wooded.svg); }
    .choosable_box--choosable_box--single_family .custom-control-input:disabled ~ .custom-control-label:before, .choosable_box--choosable_box--single_family .custom-control-input:checked ~ .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/Icons_Single_Family_On.svg); }
    .choosable_box--choosable_box--multi_family .custom-control-input:disabled ~ .custom-control-label:before, .choosable_box--choosable_box--multi_family .custom-control-input:checked ~ .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/Icons_Multi_Family_On.svg); }
    .choosable_box--choosable_box--townhouse .custom-control-input:disabled ~ .custom-control-label:before, .choosable_box--choosable_box--townhouse .custom-control-input:checked ~ .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/Icons_Townhouse_On.svg); }
    .choosable_box--choosable_box--condominium .custom-control-input:disabled ~ .custom-control-label:before, .choosable_box--choosable_box--condominium .custom-control-input:checked ~ .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/Icons_Condominium_On.svg); }
    .choosable_box--choosable_box--lots_lands .custom-control-input:disabled ~ .custom-control-label:before, .choosable_box--choosable_box--lots_lands .custom-control-input:checked ~ .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/Icons_LotsLands_On.svg); }
    .choosable_box--choosable_box--acreage_homes .custom-control-input:disabled ~ .custom-control-label:before, .choosable_box--choosable_box--acreage_homes .custom-control-input:checked ~ .custom-control-label:before {
      background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/filters/Icons_AcreageHomes_On.svg); }
  .choosable_box .custom-control-input:disabled ~ .custom-control-label {
    cursor: not-allowed; }
  .choosable_box .custom-control-input:disabled ~ .custom-control-label,
  .choosable_box .custom-control-input:checked ~ .custom-control-label {
    border-color: #0738CD;
    background: #DAE1F8;
    color: #0738CD; }
  .choosable_box .custom-control-input:disabled ~ .custom-control-label {
    opacity: 0.5;
    -webkit-opacity: 0.5 !important;
    -moz-opacity: 0.5 !important; }

.choosable_iconbox .custom-control-label {
  border: 1px solid #DFE3F0;
  border-radius: 4px;
  height: 48px;
  overflow: hidden;
  display: block;
  margin: 2px;
  font-size: 11px;
  text-align: center;
  cursor: pointer;
  color: #212529;
  font-weight: 600;
  padding-bottom: 7px;
  position: relative;
  padding-top: 5px;
  width: 100%; }
  .choosable_iconbox .custom-control-label:hover {
    border: 1px solid #AFB8D9; }
  .choosable_iconbox .custom-control-label:before {
    content: none; }
  .choosable_iconbox .custom-control-label__icon {
    display: block;
    position: absolute;
    left: 0px;
    right: 0px;
    top: 6px;
    bottom: auto; }
  .choosable_iconbox .custom-control-label__text {
    display: block;
    position: absolute;
    left: 0px;
    right: 0px;
    top: 26px;
    bottom: 0px;
    text-align: center;
    font-size: 11px; }
.choosable_iconbox .custom-control-input:disabled ~ .custom-control-label {
  cursor: not-allowed; }
.choosable_iconbox .custom-control-input:disabled ~ .custom-control-label,
.choosable_iconbox .custom-control-input:checked ~ .custom-control-label {
  border-color: #0738CD;
  color: #0738CD;
  position: relative;
  /*
  &__icon {
  	
  	opacity: 0.5;
  	
  	path {
  		fill : $color-har-blue; 
  	}
  }*/ }
  .choosable_iconbox .custom-control-input:disabled ~ .custom-control-label:before,
  .choosable_iconbox .custom-control-input:checked ~ .custom-control-label:before {
    content: "";
    position: absolute;
    right: 0px;
    top: 0px;
    left: auto;
    width: 38px;
    height: 38px;
    background: transparent url("https://content.harstatic.com/media/icons/rectangle_arrow_small.svg") no-repeat right -2px top !important;
    box-shadow: none !important;
    border: none !important; }
.choosable_iconbox .custom-control-input:disabled ~ .custom-control-label {
  opacity: 0.5;
  -webkit-opacity: 0.5 !important;
  -moz-opacity: 0.5 !important; }

.choosable_topic {
  display: inline-block;
  margin: 0px 2px 4px 0px; }
  .choosable_topic .choosable_topic-label {
    border-radius: 4px;
    height: 28px;
    display: block;
    font-size: 12px;
    text-align: left;
    cursor: pointer;
    font-weight: 400;
    color: #212529;
    position: relative;
    width: 100%;
    padding: 3px 8px;
    border: solid 1px #dfe3f0;
    background-color: #ffffff;
    margin-bottom: 0px; }
    .choosable_topic .choosable_topic-label:before {
      content: none; }
  .choosable_topic .custom-control-input:disabled ~ .choosable_topic-label,
  .choosable_topic .custom-control-input:disabled ~ .choosable_topic-label,
  .choosable_topic .custom-control-input:checked ~ .choosable_topic-label {
    padding: 3px 8px 2px 20px;
    background-color: #0738CD;
    color: #FFF;
    border: solid 1px #0738CD;
    font-weight: 600; }
    .choosable_topic .custom-control-input:disabled ~ .choosable_topic-label:before,
    .choosable_topic .custom-control-input:disabled ~ .choosable_topic-label:before,
    .choosable_topic .custom-control-input:checked ~ .choosable_topic-label:before {
      content: "";
      background: url(https://content.harstatic.com/media/icons/check_mark_white_simple.svg) no-repeat center center;
      background-size: cover;
      width: 9px;
      height: 6px;
      position: absolute;
      left: 7px;
      top: 9px; }

.input-search_form {
  background: #ffffff url("https://content.harstatic.com/media/icons/icon-search.svg") no-repeat left 10px center;
  background-size: 16px;
  padding: 12px 12px 12px 36px; }

.btn-group-toggle {
  width: 100%; }
.btn-group .btn {
  border: 1px solid #DFE3F0;
  background-color: #fff;
  font-size: 16px;
  font-size: 12px;
  font-weight: bold;
  padding: 9px 25px;
  line-height: 1;
  cursor: pointer;
  color: #3B5363 !important;
  transform: translate(0, 0); }
  .btn-group .btn .custom_fill {
    fill: #3B5363 !important; }
  .btn-group .btn:active {
    background: #EDF0FA !important;
    color: #212529 !important; }
    .btn-group .btn:active path {
      fill: #FFF; }
  .btn-group .btn:hover {
    opacity: 1 !important;
    border-color: #AFB8D9 !important; }
  .btn-group .btn.active {
    background-color: #042280 !important;
    color: #FFF !important;
    border-color: #042280 !important; }
    .btn-group .btn.active .custom_fill {
      fill: #FFF !important; }

.input-description {
  background-color: #F3F4F7;
  border-radius: 4px;
  color: #52738A;
  font-size: 11px;
  padding: 4px;
  text-align: left; }

.agent_signature {
  text-align: left; }
  .agent_signature a:hover {
    opacity: 0.85;
    text-decoration: none !important; }
  .agent_signature__photo {
    float: left;
    margin-right: 8px; }
    .agent_signature__photo a {
      display: block;
      width: 32px;
      height: 32px;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      border-radius: 50%; }
  .agent_signature__info {
    width: calc(100% - 40px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 16px; }
    .agent_signature__info__agent_name {
      font-size: 12px;
      color: #042280;
      font-weight: 600; }
    .agent_signature__info__broker_name {
      font-size: 12px;
      color: #3B5363 !important;
      opacity: 0.85; }
  .agent_signature--photoonlye {
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    background-color: #f3f4f7;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(https://content.harstatic.com/media/icons/icon_no_user.svg);
    background-size: 29px; }
    .agent_signature--photoonlye span {
      display: block;
      width: 96px;
      height: 96px;
      border-radius: 50%;
      border: solid 0.8px #dfe3f0;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover; }

.agent_signature--large {
  text-align: left; }
  .agent_signature--large a:hover {
    opacity: 0.85;
    text-decoration: none !important; }
  .agent_signature--large__photo {
    float: left;
    margin-right: 8px; }
    .agent_signature--large__photo a {
      display: block;
      width: 52px;
      height: 52px;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      border-radius: 50%; }
  .agent_signature--large__info {
    width: calc(100% - 60px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-top: 5px;
    line-height: 20px; }
    .agent_signature--large__info__agent_name {
      font-size: 16px;
      color: #042280;
      font-weight: 600; }
    .agent_signature--large__info__broker_name {
      font-size: 12px;
      color: #3B5363 !important;
      opacity: 1; }

.agent_signature--large_extra {
  text-align: left;
  display: flex; }
  .agent_signature--large_extra a:hover {
    opacity: 0.85;
    text-decoration: none !important; }
  .agent_signature--large_extra__photo {
    float: left;
    margin-right: 15px; }
    .agent_signature--large_extra__photo a {
      display: block;
      width: 104px;
      height: 104px;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      border-radius: 50%; }
      @media screen and (max-width: 767px) {
        .agent_signature--large_extra__photo a {
          width: 72px;
          height: 72px; } }
  .agent_signature--large_extra__info {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-top: 5px;
    line-height: 20px;
    align-self: center; }
    .agent_signature--large_extra__info__agent_name {
      font-size: 24px;
      color: #042280;
      font-weight: 700;
      text-decoration: none !important;
      padding-bottom: 5px;
      display: block; }
      @media screen and (max-width: 767px) {
        .agent_signature--large_extra__info__agent_name {
          font-size: 18px; } }
    .agent_signature--large_extra__info__broker_name {
      font-size: 14px;
      color: #52738A !important;
      display: block;
      opacity: 1; }

.agent_signature--square {
  text-align: left;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  border: solid 1px #DFE3F0;
  background-color: #FFF;
  border-radius: 4px;
  display: flex;
  width: 100%; }
  .agent_signature--square a:hover {
    opacity: 0.85; }
  .agent_signature--square__photo {
    width: 72px;
    height: 100%; }
    .agent_signature--square__photo a {
      display: block;
      width: 72px;
      height: 72px;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      border-radius: 4px 0px 0px 4px; }
  .agent_signature--square__info {
    width: calc(100% - 72px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0px 10px;
    align-self: center; }
    .agent_signature--square__info__agent_name {
      font-size: 12px;
      color: #212529 !important;
      font-weight: 700;
      display: block;
      padding-bottom: 5px; }
    .agent_signature--square__info__broker_name a {
      font-size: 12px;
      color: #52738A !important;
      display: block;
      opacity: 1; }

.sticked {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.24); }
  .sticked .agent_signature--square {
    box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0);
    border: none; }
    .sticked .agent_signature--square__photo {
      width: 44px; }
      .sticked .agent_signature--square__photo a {
        width: 44px;
        height: 44px;
        border-radius: 2px; }
    .sticked .agent_signature--square__info {
      width: calc(100% - 44px);
      padding: 5px 5px 5px 10px; }
      .sticked .agent_signature--square__info__agent_name {
        padding-bottom: 0px; }

.card {
  display: block !important;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #DFE3F0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: left;
  text-decoration: none !important;
  background-position: top left;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  margin-bottom: 30px;
  background-color: #FFF;
  transition: all 0.2s ease !important;
  /* provider card*/ }
  .card > a {
    text-decoration: none !important;
    display: block;
    color: #3B5363; }
    .card > a :hover {
      color: #3B5363; }
  .card--video:hover, .card--features:hover, .card--caltoaction:hover, .card--link:hover, .card--icon_btn:hover, .card--qa:hover, .card--hover:hover, .card--agent:hover, .card--team:hover, .card--broker:hover, .card--blog_post:hover, .card--blog_post_large:hover, .card--blog_post_medium:hover, .card--landscape_with_icon:hover, .card--landscape_small:hover, .card--landscape_medium:hover, .card--portrait_medium:hover {
    border: 1px solid #AFB8D9;
    transition: all 0.2s ease !important; }
  .card--blog_post_large__image_content__image, .card--blog_post__image_content__image, .card--blog_post_medium__image_content__image, .card--landscape_large__image_content__image, .card--landscape_medium__image_content__image, .card--portrait_medium__image_content__image {
    transition-duration: 0.6s;
    transition-property: all;
    transition-timing-function: ease; }
  .card:hover .card--blog_post_large__image_content__image, .card:hover .card--blog_post__image_content__image, .card:hover .card--blog_post_medium__image_content__image, .card:hover .card--landscape_medium__image_content__image, .card:hover .card--listing__image_content__image, .card:hover .card--portrait_medium__image_content__image {
    transform: scale(1.05, 1.05) !important; }
  .card:active {
    border: 1px solid #AFB8D9;
    box-shadow: none !important; }
  .card--landscape_large, .card--landscape_medium {
    display: grid !important;
    grid-gap: 0;
    grid-template-columns: 35% 65%;
    grid-template-rows: 100% auto;
    grid-template-areas: 'a b'; }
    @media screen and (max-width: 600px) {
      .card--landscape_large, .card--landscape_medium {
        grid-template-columns: 100%;
        grid-template-rows: 120px auto; } }
    .card--landscape_large__image_content, .card--landscape_medium__image_content {
      grid-area: a;
      width: 100%;
      height: 100%;
      background-color: #EDF0FA;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 4px 0 0 4px;
      overflow: hidden;
      background-image: url("https://content.harstatic.com/media/icons/no_photo_placeholder.svg");
      background-repeat: no-repeat;
      background-position: center center;
      text-decoration: none; }
      @media screen and (max-width: 600px) {
        .card--landscape_large__image_content, .card--landscape_medium__image_content {
          border-radius: 4px 4px 0 0; } }
      .card--landscape_large__image_content a, .card--landscape_medium__image_content a {
        display: block;
        width: 100%;
        height: 100%; }
      .card--landscape_large__image_content__image, .card--landscape_medium__image_content__image {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center; }
    .card--landscape_large__content, .card--landscape_medium__content {
      grid-area: b;
      width: 100%;
      overflow: hidden;
      margin-left: 0;
      padding: 24px;
      color: #515B7A;
      text-decoration: none; }
      @media screen and (max-width: 600px) {
        .card--landscape_large__content, .card--landscape_medium__content {
          grid-column-start: 1;
          grid-row-start: 2;
          padding: 16px; } }
    .card--landscape_large h5, .card--landscape_medium h5 {
      font-size: 16px;
      line-height: 24px;
      font-weight: 700;
      margin-bottom: 4px;
      color: #212529;
      text-overflow: ellipsis;
      overflow: hidden;
      display: block; }
      .card--landscape_large h5 a, .card--landscape_medium h5 a {
        color: #212529;
        text-decoration: none; }
        .card--landscape_large h5 a:hover, .card--landscape_medium h5 a:hover {
          text-decoration: underline; }
      @media screen and (max-width: 768px) {
        .card--landscape_large h5, .card--landscape_medium h5 {
          font-size: 14px;
          line-height: 16px; } }
    .card--landscape_large__text, .card--landscape_medium__text {
      color: #515B7A;
      font-size: 12px;
      line-height: 18px; }
  .card--landscape_large__image_content__image:hover {
    transform: scale(1.05, 1.05); }
  .card--landscape_large__content {
    padding: 24px;
    min-height: 150px;
    text-decoration: none; }
  .card--landscape_large__text {
    color: #515B7A;
    font-size: 14px;
    line-height: 20px; }
  .card--portrait_medium__image_content {
    width: 100%;
    height: 190px;
    background-color: #EDF0FA;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 4px 4px 0 0;
    overflow: hidden;
    z-index: 1; }
    @media screen and (max-width: 768px) {
      .card--portrait_medium__image_content {
        height: 136px; } }
    .card--portrait_medium__image_content--small {
      height: 128px; }
    .card--portrait_medium__image_content--large {
      height: 232px; }
    .card--portrait_medium__image_content--medium {
      height: 156px; }
    .card--portrait_medium__image_content__image {
      width: 100%;
      height: 100%;
      background-size: cover; }
  .card--portrait_medium__text {
    color: #515B7A;
    font-size: 12px;
    line-height: 22px; }
  .card--portrait_medium__content {
    position: relative;
    z-index: 2;
    background: #FFF;
    margin-top: -24px;
    padding: 16px 8px;
    margin-left: 0px;
    text-align: center;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    text-decoration: none; }
    .card--portrait_medium__content--two_lines_height {
      min-height: 76px; }
      .card--portrait_medium__content--two_lines_height h5 {
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        margin-left: 0px;
        margin-right: 0px; }
    .card--portrait_medium__content hr {
      width: 100%; }
  .card--portrait_medium__school__content {
    padding: 16px 24px; }
  .card--portrait_medium h5 {
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
    margin-bottom: 0;
    color: #212529;
    text-overflow: ellipsis;
    overflow: hidden;
    display: block; }
    @media screen and (max-width: 768px) {
      .card--portrait_medium h5 {
        font-size: 14px; } }
  .card--listing {
    border: none !important;
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0); }
    .card--listing--portrait .card--listing__body > a, .card--listing--portrait .card--listing__body_wraper {
      grid-template-columns: 100% 0%;
      grid-template-rows: 200px auto; }
    .card--listing--portrait .card--listing__body__content {
      grid-column-start: 1;
      grid-row-start: 2;
      padding: 16px;
      text-decoration: none; }
      .card--listing--portrait .card--listing__body__content h4 {
        font-size: 14px;
        line-height: 1.2; }
    .card--listing--portrait .card--listing__body__font_rent {
      color: #8269bc; }
    .card--listing__body {
      position: relative;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); }
      .card--listing__body > a, .card--listing__body_wraper {
        transition-duration: 0.6s;
        transition-property: all;
        transition-timing-function: ease;
        border: 1px solid #DFE3F0;
        overflow: hidden;
        border-radius: 4px;
        display: grid;
        grid-gap: 0;
        grid-template-columns: 38% 62%;
        grid-template-rows: 100% auto;
        grid-template-areas: 'a b'; }
        @media screen and (max-width: 600px) {
          .card--listing__body > a, .card--listing__body_wraper {
            grid-template-columns: 100% 0%;
            grid-template-rows: 200px auto; } }
        .card--listing__body > a:hover, .card--listing__body > a:active, .card--listing__body_wraper:hover, .card--listing__body_wraper:active {
          text-decoration: none;
          border: 1px solid #AFB8D9; }
        .card--listing__body > a_xlarge, .card--listing__body_wraper_xlarge {
          grid-template-columns: 45% 55%; }
          @media screen and (max-width: 600px) {
            .card--listing__body > a_xlarge, .card--listing__body_wraper_xlarge {
              grid-template-columns: 100% 0%;
              grid-template-rows: 200px auto; } }
      .card--listing__body__impovement {
        background-color: #EDF0FA;
        border-radius: 4px;
        padding: 5px 8px;
        font-size: 11px;
        margin-top: 10px; }
      a:hover .card--listing__body__image_content_image, .card--listing__body_wraper:hover .card--listing__body__image_content_image {
        transform: scale(1.05, 1.05); }
      .card--listing__body__image_content {
        grid-area: a;
        width: 100%;
        height: 100%;
        background-color: #EDF0FA;
        overflow: hidden;
        background-image: url("https://content.harstatic.com/media/icons/no_photo_placeholder.svg");
        background-repeat: no-repeat;
        background-position: center center; }
        .card--listing__body__image_content_image {
          transition-duration: 0.6s;
          transition-property: all;
          transition-timing-function: ease;
          width: 100%;
          height: 100%;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center; }
        .card--listing__body__image_content_label {
          background-color: #FD4B78;
          color: #FFF;
          font-size: 12px;
          border-radius: 2px;
          height: 22px;
          padding: 1px 5px;
          position: absolute;
          right: 5px;
          top: 5px; }
      .card--listing__body__content {
        grid-area: b;
        width: 100%;
        padding: 15px 16px 15px 16px;
        text-decoration: none; }
        @media screen and (max-width: 600px) {
          .card--listing__body__content {
            grid-column-start: 1;
            grid-row-start: 2;
            padding: 16px; } }
        .card--listing__body__content h4 {
          margin-bottom: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis; }
        .card--listing__body__content__description_row {
          border-top: 1px solid #DFE3F0 !important;
          padding: 3px;
          width: 50%;
          float: left;
          color: #3B5363; }
        .card--listing__body__content__description_row_full {
          border-top: 1px solid #DFE3F0 !important;
          padding: 3px;
          width: 100%;
          float: none;
          color: #3B5363; }
        .card--listing__body__content a {
          text-decoration: none;
          color: #3B5363; }
    .card--listing__header {
      margin-bottom: 10px; }
    .card--listing__xlarge_wraper {
      grid-template-columns: 45% 55%; }
    .card--listing--reduced {
      max-width: 248px; }
    .card--listing--reduced .card--listing__body > a, .card--listing--reduced .card--listing__body_wraper {
      grid-template-columns: 100%;
      grid-template-rows: 177px auto; }
      .card--listing--reduced .card--listing__body > a_small, .card--listing--reduced .card--listing__body_wraper_small {
        grid-template-columns: 100%;
        grid-template-rows: 148px auto; }
    .card--listing--reduced .card--listing__body__content {
      grid-column-start: 1;
      grid-row-start: 2;
      padding: 6px;
      text-decoration: none; }
      .card--listing--reduced .card--listing__body__content h4 {
        font-size: 14px; }
      .card--listing--reduced .card--listing__body__content__description_row {
        padding: 3px 0px; }
    .card--listing--small .card--listing__body > a, .card--listing--small .card--listing__body_wraper {
      grid-gap: 0;
      grid-template-columns: 31% 69%;
      grid-template-rows: 100% auto;
      grid-template-areas: 'a b'; }
    .card--listing--small .card--listing__body__content {
      padding: 8px !important;
      text-decoration: none; }
      @media screen and (max-width: 600px) {
        .card--listing--small .card--listing__body__content {
          grid-column-start: auto !important;
          grid-row-start: auto !important; } }
      .card--listing--small .card--listing__body__content h4 {
        font-size: 14px; }
      .card--listing--small .card--listing__body__content__description_row {
        padding: 2px 0 0 0;
        width: calc(100% / 3); }
        @media screen and (max-width: 600px) {
          .card--listing--small .card--listing__body__content__description_row {
            display: none; } }
    .card--listing__labels .label {
      margin-bottom: 5px; }
    .card--listing--selected .card--listing__body_wraper {
      border: solid 1px #AFB8D9; }
  .card--transparent {
    background-color: transparent !important; }
  .card--landscape_small {
    margin-bottom: 0px; }
    .card--landscape_small a {
      font-size: 14px;
      color: #000;
      font-weight: 700;
      padding: 18px 10px;
      text-align: center;
      display: block; }
      .card--landscape_small a:hover {
        text-decoration: none;
        color: #000; }
    .card--landscape_small--with_icon a {
      padding: 10px;
      text-align: left; }
      .card--landscape_small--with_icon a:before {
        content: "";
        width: 36px;
        height: 36px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
        display: inline-block;
        vertical-align: middle;
        margin-right: 10px; }
    .card--landscape_small--with_icon--email a:before {
      background-image: url("https://content.harstatic.com/resource_2019/imgs/icons/social/social_icon_email.svg"); }
    .card--landscape_small--with_icon--facebook a:before {
      background-image: url("https://content.harstatic.com/resource_2019/imgs/icons/social/social_icon_facebook.svg"); }
    .card--landscape_small--with_icon--twitter a:before {
      background-image: url("https://content.harstatic.com/resource_2019/imgs/icons/social/social_icon_twitter.svg"); }
    .card--landscape_small--with_icon--tumblr a:before {
      background-image: url("https://content.harstatic.com/resource_2019/imgs/icons/social/social_icon_tumblr.svg"); }
    .card--landscape_small--with_icon--microsoft a:before {
      background-image: url("https://content.harstatic.com/resource_2019/imgs/icons/social/social_icon_microsoft.svg"); }
    .card--landscape_small--with_icon--linkedin a:before {
      background-image: url("https://content.harstatic.com/resource_2019/imgs/icons/social/social_icon_linkedin.svg"); }
    .card--landscape_small--with_icon--digg a:before {
      background-image: url("https://content.harstatic.com/resource_2019/imgs/icons/social/social_icon_digg.svg"); }
    .card--landscape_small--with_icon--reddit a:before {
      background-image: url("https://content.harstatic.com/resource_2019/imgs/icons/social/social_icon_reddit.svg"); }
    .card--landscape_small--with_icon--delicious a:before {
      background-image: url("https://content.harstatic.com/resource_2019/imgs/icons/social/social_icon_delicious.svg"); }
    .card--landscape_small--with_icon--box a:before {
      background-image: url("https://content.harstatic.com/resource_2019/imgs/icons/box_icon.svg"); }
    .card--landscape_small--with_icon--csv a:before {
      background-image: url("https://content.harstatic.com/resource_2019/imgs/icons/csv_icon.svg"); }
    .card--landscape_small--with_icon--mailchimp a:before {
      background-image: url("https://content.harstatic.com/resource_2019/imgs/icons/mailchimp_icon.svg"); }
    .card--landscape_small--with_icon--slack a:before {
      background-image: url("https://content.harstatic.com/resource_2019/imgs/icons/slacl_icon.svg"); }
    .card--landscape_small--with_icon--yahoo a:before {
      background-image: url("https://content.harstatic.com/resource_2019/imgs/icons/yahoo_icon.svg"); }
    .card--landscape_small--with_icon--google a:before {
      background-image: url("https://content.harstatic.com/resource_2019/imgs/icons/google_from.svg"); }
    .card--landscape_small--with_icon--outlook a:before {
      background-image: url("https://content.harstatic.com/resource_2019/imgs/icons/outlook_icon.svg"); }
  .card--blog_post {
    display: grid !important;
    grid-gap: 0;
    grid-template-columns: calc(100% - 132px) 132px;
    grid-template-areas: 'a b';
    text-decoration: none !important;
    color: #52738A !important; }
    .card--blog_post__image_content {
      grid-area: b;
      background-color: #EDF0FA;
      background-repeat: no-repeat;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 0px 4px 4px 0px;
      overflow: hidden; }
      .card--blog_post__image_content__image {
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center; }
        .card--blog_post__image_content__image div {
          display: block;
          width: 100%;
          height: 100%; }
    .card--blog_post__content {
      grid-area: a;
      padding: 16px;
      color: #52738A !important;
      text-decoration: none; }
      .card--blog_post__content h5 {
        font-size: 14px;
        color: #212529 !important;
        font-weight: bold;
        text-decoration: none; }
    @media screen and (max-width: 750px) {
      .card--blog_post {
        grid-template-columns: calc(100% - 112px) 112px; }
        .card--blog_post__image_content {
          background-color: transparent;
          width: 100%;
          height: 112px;
          padding: 16px; }
          .card--blog_post__image_content__image {
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            border-radius: 4px; }
            .card--blog_post__image_content__image div {
              display: block;
              width: 100%;
              height: 100%; } }
  .card--blog_post_medium {
    display: grid !important;
    grid-gap: 0;
    grid-template-columns: repeat(auto-fit, minmax(216px, auto));
    grid-template-areas: 'a b';
    text-decoration: none !important;
    color: #52738A !important; }
    .card--blog_post_medium__image_content {
      grid-area: b;
      background-color: #EDF0FA;
      background-repeat: no-repeat;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 0px 4px 4px 0px;
      overflow: hidden; }
      .card--blog_post_medium__image_content__image {
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center; }
        .card--blog_post_medium__image_content__image div {
          display: block;
          width: 100%;
          height: 100%; }
    .card--blog_post_medium__date {
      color: #52738A;
      font-size: 12px;
      padding-bottom: 5px; }
      .card--blog_post_medium__date span {
        color: #DDDDDD;
        padding: 0px 5px; }
    .card--blog_post_medium__text {
      color: #212529; }
      .card--blog_post_medium__text a {
        color: #212529; }
    .card--blog_post_medium__content {
      grid-area: a;
      padding: 24px;
      color: #52738A !important;
      text-decoration: none; }
      .card--blog_post_medium__content h5 {
        font-size: 16px;
        color: #212529 !important;
        font-weight: bold;
        text-decoration: none; }
    @media screen and (max-width: 750px) {
      .card--blog_post_medium {
        grid-template-columns: repeat(auto-fit, minmax(112px, auto)); }
        .card--blog_post_medium__content {
          padding: 16px 10px 16px 16px;
          text-decoration: none; }
        .card--blog_post_medium__image_content {
          background-color: transparent;
          width: 100%;
          height: 112px;
          padding: 16px; }
          .card--blog_post_medium__image_content__image {
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            border-radius: 4px; }
            .card--blog_post_medium__image_content__image div {
              display: block;
              width: 100%;
              height: 100%; } }
  .card--blog_post_large {
    width: 100%;
    background-color: #FFF;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 4px;
    overflow: hidden;
    z-index: 1;
    margin-bottom: 0px;
    flex-grow: 1; }
    .card--blog_post_large__container {
      display: flex;
      flex-flow: column; }
    .card--blog_post_large__image_content {
      background-color: #EDF0FA;
      background-repeat: no-repeat;
      width: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      overflow: hidden; }
      .card--blog_post_large__image_content__image {
        width: 100%;
        height: 160px;
        display: block;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center; }
        .card--blog_post_large__image_content__image div {
          display: block;
          width: 100%;
          height: 100%; }
    .card--blog_post_large__content {
      padding: 40px;
      color: #52738A !important;
      text-decoration: none; }
      .card--blog_post_large__content h5 {
        font-size: 24px;
        color: #212529 !important;
        font-weight: bold;
        text-decoration: none; }
    .card--blog_post_large__date {
      color: #52738A;
      font-size: 12px;
      padding-bottom: 5px; }
      .card--blog_post_large__date span {
        color: #DDDDDD;
        padding: 0px 5px; }
    .card--blog_post_large__text {
      font-size: 14px;
      color: #212529; }
      .card--blog_post_large__text a {
        color: #212529; }
    @media screen and (max-width: 750px) {
      .card--blog_post_large__content {
        padding: 16px 10px 16px 16px;
        color: #52738A !important; }
        .card--blog_post_large__content h5 {
          font-size: 18px;
          padding-bottom: 10px; } }
  .card--agent {
    padding: 15px;
    max-width: 248px;
    position: relative;
    overflow: inherit;
    width: 100%;
    min-height: 85px; }
    .card--agent__image {
      float: left;
      margin-right: 16px;
      display: block;
      width: 56px;
      height: 56px;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      border-radius: 50%; }
    .card--agent a:hover {
      opacity: 0.6; }
    .card--agent__badge {
      font-size: 11px;
      color: #FFF;
      border-radius: 4px;
      background-color: #FD4B78;
      height: 16px;
      position: absolute;
      top: -8px;
      left: 0px;
      z-index: 1;
      padding: 0px 5px; }
    .card--agent__content {
      width: calc(100% - 76px);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 16px;
      text-decoration: none; }
      .card--agent__content_name {
        font-size: 14px;
        color: #212529 !important;
        font-weight: 700;
        line-height: 18px;
        margin-bottom: 0px;
        display: block;
        text-decoration: none !important;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap; }
        .card--agent__content_name img {
          height: 14px;
          margin-right: 2px; }
      .card--agent__content_stars {
        line-height: 12px; }
        .card--agent__content_stars img {
          width: 12px; }
      .card--agent__content_desc {
        color: #515B7A;
        font-size: 11px;
        padding-top: 8px;
        line-height: 14px; }
        .card--agent__content_desc img {
          display: block;
          float: left;
          height: 14px;
          margin-right: 5px; }
      .card--agent__content_firm {
        color: #515B7A;
        font-size: 12px;
        padding-bottom: 3px;
        padding-top: 3px;
        line-height: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap; }
      .card--agent__content_points {
        color: #515B7A;
        padding-top: 6px; }
        .card--agent__content_points div {
          padding-bottom: 3px; }
        .card--agent__content_points div:last-child {
          padding-bottom: 0px; }
    .card--agent_portrait {
      padding: 16px;
      text-align: center; }
      .card--agent_portrait__content {
        text-decoration: none; }
        .card--agent_portrait__content_name {
          font-size: 14px;
          color: #212529 !important;
          font-weight: 700;
          line-height: 18px;
          margin-bottom: 3px;
          display: block;
          text-decoration: none !important; }
        .card--agent_portrait__content_stars {
          line-height: 14px;
          margin-bottom: 5px; }
          .card--agent_portrait__content_stars img {
            width: 14px; }
        .card--agent_portrait__content_desc {
          font-size: 11px;
          color: #3B5363;
          margin-bottom: 15px; }
      .card--agent_portrait__image {
        margin: 0px auto 12px auto;
        display: block;
        width: 80px;
        height: 80px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        border-radius: 50%; }
    .card--agent_large {
      padding: 16px 24px;
      display: grid !important;
      grid-gap: 0;
      grid-template-columns: 53% 47%;
      grid-template-rows: 100% auto;
      grid-template-areas: 'a b';
      color: #3B5363;
      position: relative;
      overflow: inherit;
      margin-bottom: 15px; }
      @media screen and (max-width: 750px) {
        .card--agent_large {
          grid-template-columns: 100%;
          grid-template-rows: 120px auto;
          display: block !important;
          padding: 8px 10px; } }
      .card--agent_large__flag {
        height: 24px;
        width: 32px;
        border-radius: 1px;
        overflow: hidden;
        text-align: center;
        display: inline-block;
        float: left; }
      .card--agent_large__more_btn {
        height: 24px;
        width: 24px;
        border-radius: 2px;
        border: solid 1px rgba(218, 225, 248, 0.16);
        background-color: #DFE3F0;
        text-align: center;
        color: #515B7A;
        display: inline-block;
        margin: 0px 4px;
        padding: 3px 3px;
        font-size: 11px; }
      .card--agent_large__certificate {
        display: inline-block;
        float: left;
        background-color: #042280;
        border-radius: 2px;
        padding: 0px 5px;
        color: #94AAEB !important;
        font-size: 11px;
        line-height: 24px;
        text-decoration: none !important; }
      .card--agent_large__profile {
        grid-area: a;
        width: 100%; }
      .card--agent_large__certifi {
        grid-area: b;
        width: 100%; }
      .card--agent_large__image {
        float: left;
        margin-right: 22px;
        display: block;
        width: 102px;
        height: 102px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        border-radius: 50%; }
        @media screen and (max-width: 750px) {
          .card--agent_large__image {
            width: 70px;
            height: 70px;
            margin-right: 12px; } }
      .card--agent_large__badge {
        font-size: 11px;
        color: #FFF;
        border-radius: 4px;
        background-color: #FD4B78;
        height: 16px;
        position: absolute;
        top: -8px;
        left: 0px;
        z-index: 1;
        padding: 0px 5px; }
      .card--agent_large__content {
        width: calc(100% - 126px);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 16px;
        text-decoration: none; }
        .card--agent_large__content_name {
          font-size: 18px;
          color: #212529 !important;
          font-weight: 700;
          line-height: 26px;
          margin-bottom: 3px;
          display: block;
          text-decoration: none !important; }
        .card--agent_large__content_stars {
          line-height: 12px;
          padding-bottom: 2px; }
          .card--agent_large__content_stars img {
            width: 16px; }
        .card--agent_large__content_desc {
          color: #000;
          font-size: 11px;
          padding-top: 5px;
          padding-bottom: 5px;
          line-height: 16px;
          font-weight: 700;
          display: block; }
          .card--agent_large__content_desc img {
            display: block;
            float: left;
            height: 18px;
            margin-right: 5px; }
    .card--agent_longinfo {
      padding: 16px 24px;
      display: grid !important;
      grid-gap: 0;
      grid-template-columns: 53% 47%;
      grid-template-rows: 100% auto;
      grid-template-areas: 'a b';
      color: #3B5363;
      position: relative;
      overflow: inherit;
      margin-bottom: 15px;
      font-size: 11px; }
      @media screen and (max-width: 750px) {
        .card--agent_longinfo {
          grid-template-columns: 100%;
          grid-template-rows: 120px auto;
          display: block !important;
          padding: 8px 10px; } }
      .card--agent_longinfo__arrowlink {
        display: none; }
      @media screen and (min-width: 750px) {
        .card--agent_longinfo:hover {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.24);
          transition: all 0.3s ease !important; }
          .card--agent_longinfo:hover .card--agent_longinfo__certifi {
            display: none;
            transition: all 0.3s ease !important; }
          .card--agent_longinfo:hover .card--agent_longinfo__arrowlink {
            display: inline-block;
            transition: all 0.3s ease !important; } }
      .card--agent_longinfo__flag {
        height: 16px;
        width: 24px;
        border-radius: 1px;
        overflow: hidden;
        text-align: center;
        display: inline-block;
        float: left; }
      .card--agent_longinfo__more_btn {
        height: 16px;
        width: 24px;
        border-radius: 2px;
        border: solid 1px rgba(218, 225, 248, 0.16);
        background-color: #DFE3F0;
        text-align: center;
        color: #515B7A;
        display: inline-block;
        margin: 0px 0px 0px 4px;
        padding: 0px;
        font-size: 11px;
        line-height: 14px; }
      .card--agent_longinfo__certificate {
        display: inline-block;
        float: left;
        background-color: #042280;
        border-radius: 2px;
        padding: 0px 5px;
        margin-left: 2px;
        color: #94AAEB !important;
        font-size: 11px;
        text-decoration: none !important; }
      .card--agent_longinfo__profile {
        grid-area: a;
        width: 100%; }
      .card--agent_longinfo__certifi {
        grid-area: b;
        width: 100%; }
      .card--agent_longinfo__image {
        float: left;
        margin-right: 22px;
        display: block;
        width: 102px;
        height: 102px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        border-radius: 50%; }
        @media screen and (max-width: 750px) {
          .card--agent_longinfo__image {
            width: 70px;
            height: 70px;
            margin-right: 12px; } }
      .card--agent_longinfo__badge {
        font-size: 11px;
        color: #FFF;
        border-radius: 4px;
        background-color: #FD4B78;
        height: 16px;
        position: absolute;
        top: -8px;
        left: 0px;
        z-index: 1;
        padding: 0px 5px; }
      .card--agent_longinfo__content {
        width: calc(100% - 126px);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 16px;
        text-decoration: none; }
        .card--agent_longinfo__content_name {
          font-size: 16px;
          color: #212529 !important;
          font-weight: 700;
          line-height: 26px;
          margin-bottom: 3px;
          display: block;
          text-decoration: none !important; }
        .card--agent_longinfo__content_stars {
          line-height: 12px;
          padding-bottom: 2px; }
          .card--agent_longinfo__content_stars img {
            width: 16px; }
        .card--agent_longinfo__content_desc {
          color: #000;
          font-size: 11px;
          padding-top: 5px;
          padding-bottom: 5px;
          line-height: 16px;
          font-weight: 700;
          display: block; }
          .card--agent_longinfo__content_desc img {
            display: block;
            float: left;
            height: 18px;
            margin-right: 5px; }
      .card--agent_longinfo_small {
        padding: 16px; }
        .card--agent_longinfo_small__image {
          float: left;
          margin-right: 12px;
          display: block;
          width: 72px;
          height: 72px;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          border-radius: 50%; }
          @media screen and (max-width: 750px) {
            .card--agent_longinfo_small__image {
              width: 60px;
              height: 60px;
              margin-right: 12px; } }
  .card--broker {
    padding: 15px;
    max-width: 248px;
    position: relative;
    overflow: inherit;
    width: 100%;
    min-height: 85px; }
    .card--broker_longinfo {
      padding: 16px 24px;
      display: grid !important;
      grid-gap: 0;
      grid-template-columns: 53% 47%;
      grid-template-rows: 100% auto;
      grid-template-areas: 'a b';
      color: #3B5363;
      position: relative;
      overflow: inherit;
      margin-bottom: 15px;
      font-size: 11px; }
      @media screen and (max-width: 750px) {
        .card--broker_longinfo {
          grid-template-columns: 100%;
          grid-template-rows: 120px auto;
          display: block !important;
          padding: 8px 10px; } }
      .card--broker_longinfo__image {
        float: left;
        margin-right: 16px;
        display: block;
        width: 100px;
        height: 100px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        border-radius: 4px;
        display: flex;
        align-self: center; }
        .card--broker_longinfo__image img {
          max-width: 100%;
          margin: 0px auto; }
        @media screen and (max-width: 750px) {
          .card--broker_longinfo__image {
            width: 80px;
            height: 80px; } }
      .card--broker_longinfo__arrowlink {
        display: none; }
      @media screen and (min-width: 750px) {
        .card--broker_longinfo:hover {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.24);
          transition: all 0.3s ease !important; }
          .card--broker_longinfo:hover .card--broker_longinfo__certifi {
            display: none;
            transition: all 0.3s ease !important; }
          .card--broker_longinfo:hover .card--broker_longinfo__arrowlink {
            display: inline-block;
            transition: all 0.3s ease !important; } }
      .card--broker_longinfo__flag {
        height: 16px;
        width: 24px;
        border-radius: 1px;
        overflow: hidden;
        text-align: center;
        display: inline-block;
        float: left; }
      .card--broker_longinfo__more_btn {
        height: 16px;
        width: 24px;
        border-radius: 2px;
        border: solid 1px rgba(218, 225, 248, 0.16);
        background-color: #DFE3F0;
        text-align: center;
        color: #515B7A;
        display: inline-block;
        margin: 0px 0px 0px 4px;
        padding: 0px;
        font-size: 11px;
        line-height: 14px; }
      .card--broker_longinfo__certificate {
        display: inline-block;
        float: left;
        background-color: #042280;
        border-radius: 2px;
        padding: 0px 5px;
        color: #94AAEB !important;
        font-size: 11px;
        line-height: 24px;
        text-decoration: none !important; }
      .card--broker_longinfo__profile {
        grid-area: a;
        width: 100%; }
      .card--broker_longinfo__certifi {
        grid-area: b;
        width: 100%; }
      .card--broker_longinfo__content {
        line-height: 16px;
        width: calc(100% - 120px);
        float: left;
        text-decoration: none; }
        .card--broker_longinfo__content_name {
          font-size: 16px;
          color: #212529 !important;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 3px;
          display: block;
          text-decoration: none !important; }
  .card--team {
    padding: 10px;
    background-color: #FFF;
    display: block;
    display: grid !important;
    grid-gap: 0;
    grid-template-columns: 80px calc(100% - 80px);
    grid-template-rows: 100% auto;
    grid-template-areas: 'a b'; }
    .card--team__logo {
      grid-area: a;
      width: 100%;
      height: 64px;
      padding: 2px;
      border: 1px solid #edf0fa;
      border-radius: 3px; }
      .card--team__logo_image {
        width: 100%;
        height: 60px;
        display: block;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center center;
        background-color: #FFF;
        overflow: hidden; }
    .card--team__content {
      grid-area: b;
      width: 100%;
      height: 100%;
      padding-left: 12px;
      text-decoration: none; }
      .card--team__content_name {
        font-weight: bold;
        text-decoration: none !important;
        color: #212529; }
      .card--team__content_agents {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        background-color: #DFE3F0; }
  .card--broker {
    padding: 12px;
    background-color: #FFF;
    display: grid !important;
    grid-gap: 0;
    grid-template-columns: 100px calc(100% - 100px);
    grid-template-rows: 100% auto;
    grid-template-areas: 'a b';
    max-width: 350px; }
    .card--broker__logo {
      grid-area: a;
      width: 100%;
      height: 100px;
      border-radius: 4px;
      display: flex;
      overflow: hidden; }
      .card--broker__logo img {
        max-width: 100%;
        align-self: center;
        margin: 0 auto; }
    .card--broker__content {
      grid-area: b;
      width: 100%;
      height: 100%;
      padding-left: 12px;
      font-size: 12px;
      color: #3B5363;
      text-decoration: none; }
      .card--broker__content_name {
        font-weight: bold;
        text-decoration: none !important;
        color: #212529;
        font-size: 14px;
        padding-bottom: 7px;
        display: block; }
  .card--provider {
    padding: 12px;
    background-color: #FFF;
    display: grid !important;
    grid-gap: 0;
    grid-template-columns: 96px calc(100% - 96px);
    grid-template-rows: 100% auto;
    grid-template-areas: 'a b';
    max-width: 350px; }
    .card--provider__logo {
      grid-area: a;
      width: 100%;
      height: 96px;
      border-radius: 50%;
      display: flex;
      overflow: hidden;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      display: block;
      background-color: #F3F4F7; }
    .card--provider__content {
      grid-area: b;
      width: 100%;
      height: 100%;
      padding-left: 15px;
      font-size: 12px;
      color: #3B5363;
      text-decoration: none; }
      .card--provider__content_name {
        font-weight: bold;
        text-decoration: none !important;
        color: #212529;
        font-size: 14px;
        padding-bottom: 2px;
        display: block; }
      .card--provider__content_desc {
        color: #515B7A;
        line-height: 1.4; }
      .card--provider__content_tage {
        color: #042280;
        font-size: 10px;
        border-radius: 2px;
        padding: 2px 4px;
        line-height: 1;
        display: inline-block;
        margin-bottom: 2px;
        background-color: #DFE3F0;
        height: 16px; }
  .card--video__image_content {
    width: 100%;
    height: 175px;
    background-color: #EDF0FA;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    border-radius: 4px 4px 0 0;
    overflow: hidden;
    z-index: 1; }
    @media screen and (max-width: 768px) {
      .card--video__image_content {
        height: 136px; } }
    .card--video__image_content__image {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center center; }
  .card--video__content {
    position: relative;
    z-index: 2;
    background: #FFF;
    padding: 16px;
    margin-left: 0px;
    text-align: center;
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    text-decoration: none; }
    .card--video__content_link {
      padding-top: 12px;
      font-weight: 600;
      font-size: 14px;
      display: flex;
      align-self: center;
      align-items: flex-start;
      width: 100%; }
  .card--video h5 {
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
    margin-bottom: 0;
    color: #212529;
    text-overflow: ellipsis;
    overflow: hidden;
    display: block; }
    @media screen and (max-width: 768px) {
      .card--video h5 {
        font-size: 14px; } }
  .card--portrait_school {
    padding: 2px; }
    .card--portrait_school:hover {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.24); }
    .card--portrait_school__label {
      border-radius: 2px;
      height: 33px;
      margin: 0 0 16px;
      padding: 6px 20px 8px 20px;
      border-radius: 2px;
      background-color: #52738a;
      color: #ffffff;
      font-size: 14px;
      font-weight: 600; }
    .card--portrait_school__content {
      padding: 0px 20px 20px 20px;
      color: #515B7A;
      font-size: 14px;
      text-decoration: none; }
      .card--portrait_school__content h3 {
        color: #212529;
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 8px; }
      .card--portrait_school__content img {
        margin-right: 2px; }
  .card--nested_a {
    overflow: inherit; }
  .card--qa {
    color: #212529; }
    .card--qa__content {
      padding: 24px;
      text-decoration: none;
      border-bottom: 1px solid #EDF0FA; }
      .card--qa__content h3 {
        font-size: 16px;
        font-weight: 700;
        color: #212529;
        margin-bottom: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap; }
    .card--qa__info {
      color: #52738A;
      display: flex;
      padding-bottom: 8px; }
      .card--qa__info_right {
        margin-left: auto;
        white-space: nowrap; }
      .card--qa__info span {
        display: inline-block;
        padding-right: 5px;
        padding-left: 5px;
        color: #dddddd; }
      .card--qa__info br {
        display: none; }
        @media screen and (max-width: 750px) {
          .card--qa__info br {
            display: block; } }
    .card--qa__text {
      font-size: 12px;
      color: #212529 !important;
      display: flex; }
      .card--qa__text_pera {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-right: 10px; }
      .card--qa__text span {
        display: flex;
        white-space: nowrap;
        font-weight: bold; }
    .card--qa__footer {
      padding: 15px 24px; }
      .card--qa__footer_small {
        font-size: 11px;
        color: #52738A;
        padding-bottom: 5px; }
      .card--qa__footer_row {
        color: #0738CD;
        display: flex; }
        .card--qa__footer_row_image {
          width: 24px;
          min-width: 24px;
          height: 24px;
          border-radius: 50%;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          display: inline-block;
          margin-right: 4px; }
        .card--qa__footer_row_more {
          background-color: #EDF0FA;
          width: 24px;
          height: 24px;
          text-align: center;
          font-size: 11px;
          color: #3B5363;
          border-radius: 50%;
          padding: 3px 0px 0px 0px; }
        .card--qa__footer_row_label {
          border-radius: 2px;
          font-size: 10px;
          display: inline-block;
          float: right;
          padding: 1px 5px;
          height: 16px;
          align-self: center;
          white-space: nowrap; }
          .card--qa__footer_row_label_resolved {
            color: #018361;
            background-color: #e5fff9;
            margin-left: auto; }
  .card--icon_btn {
    padding: 32px;
    display: grid !important;
    grid-gap: 0;
    grid-template-columns: 56px calc(100% - 56px);
    grid-template-rows: 100% auto;
    grid-template-areas: 'a b'; }
    .card--icon_btn__image {
      grid-area: a;
      border-radius: 2px;
      margin: 0 0 16px;
      border-radius: 50%;
      height: 56px;
      width: 56px;
      line-height: 56px;
      text-align: center;
      border: 1px solid #EDF0FA; }
      .card--icon_btn__image img {
        max-height: 30px;
        max-width: 30px; }
    .card--icon_btn__content {
      grid-area: b;
      padding: 0px 0px 0px 16px;
      color: #515B7A;
      font-size: 14px;
      text-decoration: none; }
      .card--icon_btn__content h3 {
        color: #042280;
        font-size: 18px;
        line-height: 24px;
        margin-bottom: 5px;
        font-weight: 700; }
      .card--icon_btn__content_desc {
        margin-right: 2px;
        color: #3B5363;
        font-size: 14px; }
  .card--link {
    display: inline-block !important;
    padding: 5px 8px;
    margin: 0px 4px 4px 0px; }
  .card--caltoaction {
    padding: 28px;
    background-image: url("https://content.harstatic.com/media/icons/icon-listing-print-center-arrow_small.svg");
    background-repeat: no-repeat;
    background-position: right 16px center;
    background-size: auto;
    text-decoration: none;
    margin-bottom: 30px; }
    .card--caltoaction_title {
      font-size: 16px;
      font-weight: 600;
      color: #212529;
      padding-bottom: 4px; }
    .card--caltoaction_text {
      font-size: 14px;
      color: #52738A;
      padding-right: 20px; }
  .card--qa_simple {
    padding: 16px; }
    .card--qa_simple h3 {
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 16px;
      color: #212529;
      line-height: 20px; }
    .card--qa_simple__text {
      color: #3B5363; }
  .card--features {
    background-color: #ffffff;
    padding: 12px;
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0);
    margin-bottom: 0px; }
    .card--features_title {
      font-weight: 600;
      color: #212529;
      font-size: 12px; }
    .card--features_text {
      font-size: 12px;
      color: #515B7A; }
  .card--claim {
    padding: 15px;
    max-width: 248px;
    position: relative;
    overflow: inherit;
    width: 100%;
    min-height: 85px; }
    .card--claim_longinfo {
      padding: 16px 24px;
      display: grid !important;
      grid-gap: 0;
      grid-template-columns: auto 180px;
      grid-template-rows: 100% auto;
      grid-template-areas: 'a b';
      color: #3B5363;
      position: relative;
      overflow: inherit;
      margin-bottom: 15px;
      font-size: 11px; }
      @media screen and (max-width: 750px) {
        .card--claim_longinfo {
          grid-template-columns: 100%;
          grid-template-rows: 120px auto;
          display: block !important;
          padding: 8px 10px;
          grid-template-columns: auto 100%; } }
      .card--claim_longinfo__image {
        float: left;
        margin-right: 16px;
        display: block;
        width: 68px;
        height: 68px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        border-radius: 4px;
        display: flex;
        align-self: center;
        border-radius: 50%;
        background-repeat: no-repeat;
        background-color: #f8f9fc; }
        .card--claim_longinfo__image img {
          max-width: 100%;
          margin: 0px auto; }
        @media screen and (max-width: 750px) {
          .card--claim_longinfo__image {
            width: 60px;
            height: 60px; } }
      .card--claim_longinfo__certifi {
        grid-area: b;
        width: 100%; }
      .card--claim_longinfo__content {
        line-height: 16px;
        width: calc(100% - 120px);
        float: left;
        text-decoration: none; }
        .card--claim_longinfo__content_name {
          font-size: 14px;
          color: #212529 !important;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 8px;
          display: block;
          text-decoration: none !important; }
        .card--claim_longinfo__content_firm {
          color: #3B5363;
          font-size: 12px;
          padding-bottom: 5px; }
        .card--claim_longinfo__content_address {
          color: #3B5363;
          font-size: 12px;
          border-top: 1px solid #f3f4f7;
          display: inline-block;
          padding-top: 5px; }
    .card--claim_action {
      align-self: center;
      display: flex; }

.blog_post_small {
  text-align: left;
  border-bottom: 1px solid #DFE3F0;
  padding-bottom: 24px;
  margin-bottom: 24px; }
  .blog_post_small a {
    font-size: 14px;
    font-weight: bold;
    color: #212529;
    text-decoration: none;
    line-height: 1.2;
    padding-bottom: 8px;
    display: inline-block; }
  .blog_post_small__date {
    font-size: 12px;
    color: #52738A !important;
    padding-bottom: 8px; }
    .blog_post_small__date span {
      color: #DDDDDD;
      padding: 0px 4px; }
  .blog_post_small__name {
    color: #3B5363;
    font-weight: 600; }

.card_portrait_medium_container .col {
  padding-left: 10px !important;
  padding-right: 10px !important; }
  .card_portrait_medium_container .col:first-child {
    padding-left: 15px !important; }
  .card_portrait_medium_container .col:last-child {
    padding-right: 15px !important; }

.dropdown a.dropdown-item {
  font-size: 14px;
  color: #212529; }
  .dropdown a.dropdown-item:hover {
    background: #EDF0FA; }
  .dropdown a.dropdown-item:active {
    background: #DAE1F8; }

.label {
  font-size: 12px;
  height: 22px;
  text-align: center;
  padding: 2px 5px;
  display: inline-block;
  border-radius: 2px;
  margin-right: 3px; }
  .label--grade {
    height: 24px;
    width: 24px;
    text-align: center;
    color: #FFF;
    font-size: 14px;
    font-weight: 700;
    display: inline-block;
    margin-right: 8px; }
    .label--grade_d {
      background-color: #ff9200; }
    .label--grade_a {
      background-color: #43cc01; }
    .label--grade_b {
      background-color: #d2d92e; }
    .label--grade_c {
      background-color: #f0c22c; }
    .label--grade_f {
      background-color: #fc291c; }
  .label--forsale {
    background-color: #018361;
    color: #FFF; }
  .label--forrent {
    background-color: #8268bc;
    color: #FFF; }
  .label--sold {
    background-color: #CC0000;
    color: #FFF; }
  .label--comingsoon {
    background-color: #77d70f;
    color: #FFF; }
  .label--comingsoon {
    background-color: #77d70f;
    color: #FFF; }
  .label--undercontract {
    background-color: #ff9000;
    color: #FFF; }
  .label--expired {
    background-color: #54b9ff;
    color: #FFF; }
  .label--withdraw {
    background-color: #f90096;
    color: #FFF; }
  .label--terminated {
    background-color: #9e9e9e;
    color: #FFF; }
  .label--incompleted {
    background-color: #060606;
    color: #FFF; }
  .label--notforsale {
    background-color: #575757;
    color: #FFF; }
  .label--newconstruction {
    font-weight: 600;
    background-color: #FD4B78;
    color: #FFF;
    font-weight: 600;
    border-radius: 4px;
    padding: 0px 5px;
    height: 24px;
    line-height: 24px; }
  .label--justlisted {
    color: #FFF;
    background-color: #14a47e;
    font-weight: 600;
    border-radius: 4px;
    padding: 0px 5px;
    height: 24px;
    line-height: 24px; }
  .label--pricereduction {
    color: #FFF;
    background-color: #FBA000;
    font-weight: 600;
    border-radius: 4px;
    padding: 0px 5px;
    height: 24px;
    line-height: 24px; }
  .label--foreclosure {
    color: #515B7A;
    background-color: #d8d8d8;
    font-weight: 600;
    border-radius: 4px;
    padding: 0px 5px;
    height: 24px;
    line-height: 24px; }
  .label--openhouse_simple {
    color: #FFF;
    background-color: #0738CD;
    font-weight: 600;
    border-radius: 4px;
    padding: 0px 5px;
    height: 24px;
    line-height: 24px; }
  .label--virtualopenhouse {
    color: #FFF;
    background-color: #0738CD;
    font-weight: 600;
    border-radius: 4px;
    padding: 0px 5px;
    height: 24px;
    line-height: 24px; }
  .label--openhouse {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    background-color: #FD4B78;
    border-top: 4px solid #b03453;
    height: 32px;
    color: #FFF;
    text-transform: uppercase;
    font-weight: 700;
    padding: 4px 16px; }
  .label--pending {
    background-color: #FFF;
    border: 1px solid rgba(251, 160, 0, 0.32);
    color: #FBA000;
    font-size: 11px;
    padding: 2px 4px;
    line-height: 18px; }
    .label--pending__continue {
      color: #ffa300;
      border: 1px solid rgba(255, 163, 0, 0.52); }
  .label--pending__continue {
    background-color: #FFF;
    border: 1px solid #f2b100;
    color: #f2b100;
    font-size: 11px;
    padding: 2px 4px;
    line-height: 18px; }
  .label--pending__continue_show {
    background-color: #FFF;
    border: 1px solid #ffa300;
    color: #ffa300;
    font-size: 11px;
    padding: 2px 4px;
    line-height: 18px; }
  .label img {
    margin-right: 3px; }
  .label--typeahead {
    height: 16px;
    padding: 0px 6px;
    color: #FFF;
    font-size: 11px;
    font-weight: 600;
    line-height: 16px;
    text-transform: uppercase;
    background-color: #52738A; }
    .label--typeahead_street {
      background-color: #00c554; }
    .label--typeahead_city {
      background-color: #dc0086; }
    .label--typeahead_zipcode {
      background-color: #e19000; }
    .label--typeahead_mls {
      background-color: #042280; }
    .label--typeahead_district {
      background-color: #336600; }
    .label--typeahead_school {
      background-color: #dfb200; }
    .label--typeahead_broker {
      background-color: #d83bb0; }
    .label--typeahead_lead {
      background-color: #fd4b78; }
    .label--typeahead_community {
      background-color: #00c554; }
    .label--typeahead_highrise {
      background-color: #9b51bd; }
    .label--typeahead_course {
      background-color: #7006a0; }
    .label--typeahead_apartment_name {
      background-color: #7006a0; }
    .label--typeahead_address {
      background-color: #22c2dd; }
    .label--typeahead_streetaddress {
      background-color: #00c554; }
    .label--typeahead_neighborhood {
      background-color: #69c200; }
    .label--typeahead_marketarea {
      background-color: #d6353d; }
    .label--typeahead_subdivision {
      background-color: #dfb200; }
    .label--typeahead_county {
      background-color: #0b50d2; }
    .label--typeahead_office {
      background-color: #566c2f; }
    .label--typeahead_keyword {
      background-color: #7006a0; }
    .label--typeahead_category {
      background-color: #5608c8; }
    .label--typeahead_management_name {
      background-color: #dbb400; }
    .label--typeahead_charterschool {
      background-color: #f9c700;
      color: #424242; }
  .label--private_school {
    background-color: #f9c700;
    height: 32px;
    padding: 5px 12px 7px;
    border-radius: 2px;
    font-size: 14px;
    font-weight: 600; }
  .label--agent {
    font-size: 11px;
    border-radius: 9px;
    line-height: 1.2;
    height: 14px;
    color: #515B7A;
    background-color: #EDF0FA;
    padding: 1px 6px 1px 6px; }
    .label--agent__bronze {
      background-color: #ce7f32;
      color: #FFF; }
    .label--agent__diamond {
      background-color: #d2f0ff;
      color: #515B7A; }
    .label--agent__platinum {
      background-color: #adadad;
      color: #FFF; }
    .label--agent__gold {
      background-color: #ff943d;
      color: #FFF; }
    .label--agent__silver {
      background-color: #7f7f7f;
      color: #FFF; }
  .label--resolved {
    background-color: #E5FFF9;
    color: #018361;
    font-weight: 600;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    padding: 0px 16px;
    display: flex; }
  .label--recognized {
    background-color: #FFFFFF;
    border: 1px solid #0738CF;
    color: #0738CF;
    font-size: 11px;
    padding: 2px 8px;
    border-radius: 12px;
    line-height: normal; }
  .label--recognized_none {
    background-color: #FFFFFF;
    border: 1px solid #5D5E5E;
    color: #5D5E5E;
    font-size: 11px;
    padding: 2px 8px;
    border-radius: 12px;
    line-height: normal; }

.cardv2 {
  display: block;
  border-radius: 4px;
  overflow: hidden;
  border-radius: 8px;
  border: solid 1px #d0d0d0;
  text-align: left;
  text-decoration: none !important;
  background-position: top left;
  background-repeat: no-repeat;
  overflow: hidden;
  margin-bottom: 30px;
  background-color: #FFF;
  transition: all 0.2s ease !important; }
  .cardv2:hover {
    border: 1px solid #AFB8D9;
    transition: all 0.2s ease !important; }
  .cardv2--area {
    padding: 24px;
    width: 278px;
    display: inline-block; }
    .cardv2--area h3 {
      font-size: 16px;
      font-weight: 800;
      color: #000;
      line-height: normal;
      margin-bottom: 16px; }
    .cardv2--area__desc {
      color: #5D5E5E;
      font-size: 14px;
      line-height: 1.43;
      padding-bottom: 16px; }
    .cardv2--area__link {
      font-weight: 600;
      font-size: 16px;
      color: #0738CD;
      margin-bottom: 24px;
      display: block; }
    .cardv2--area__map {
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      border-radius: 4px;
      overflow: hidden;
      height: 160px; }

.card--favorites {
  display: flex !important;
  padding: 0px 0px 12px 0px !important;
  margin: 0px 0px 12px 0px !important;
  border-bottom: 1px solid #f3f4f7;
  text-decoration: none !important;
  color: #515B7A !important;
  align-items: center;
  float: none !important;
  line-height: normal !important;
  height: auto !important; }
  .card--favorites__img {
    border-radius: 4px;
    overflow: hidden;
    width: 88px;
    min-width: 88px;
    height: 72px;
    margin-right: 12px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    align-self: flex-start; }
  .card--favorites__content {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left; }
    .card--favorites__content h4 {
      font-size: 12px;
      margin-bottom: 0px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: block; }
    .card--favorites__content_info {
      font-size: 12px;
      margin-bottom: 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap; }
    .card--favorites__content_not_added {
      opacity: 32%; }
    .card--favorites__content .fav_container {
      font-size: 16px;
      padding: 4px; }
      .card--favorites__content .fav_container__inner {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap; }

/* card for fav used in consumer */
.card .dropdown.show .dropdown-toggle {
  border-radius: 2px;
  box-shadow: 0 0 0 2px rgba(103, 161, 249, 0.5);
  border: solid 2px #67a1f9; }

.note_block {
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.24);
  background-color: #f8f2c0;
  padding: 4px 8px 4px 8px; }

.note_block_innter {
  background: url("https://content.harstatic.com/media/other/line_repeat_bg3.png") center top;
  color: #585645;
  line-height: 1.7; }

.note_block_innter a {
  color: #585645 !important; }

.note_block_innter .form-control, .nb_font {
  font-family: 'Caveat', cursive;
  font-size: 16px; }

.note_block_innter .form-control {
  background-color: transparent;
  border: none;
  padding: 0px;
  outline: none;
  box-shadow: none !important;
  font-family: 'Caveat', cursive;
  font-size: 16px;
  line-height: 1.7;
  max-height: 82px;
  resize: none; }

.note_block_innter .form-control::-webkit-input-placeholder {
  color: rgba(88, 86, 69, 0.4) !important;
  opacity: 0.48 !important; }

.note_block_innter .form-control::-ms-input-placeholde {
  color: rgba(88, 86, 69, 0.4) !important;
  opacity: 0.48 !important; }

.note_block_innter .form-control::placeholder {
  color: rgba(88, 86, 69, 0.4) !important;
  opacity: 0.48 !important; }

.nb_readmore {
  display: inline-block;
  font-size: 11px; }

.note_block.editmode_one {
  box-shadow: 0 0 0 2px rgba(88, 86, 69, 0.48); }

/* used in listing details */
.fav_container {
  background-color: #f2efcf;
  position: relative;
  padding: 12px;
  font-family: 'Caveat', cursive;
  font-family: 'Caveat', cursive;
  font-size: 18px;
  line-height: 1.1;
  color: #585645 !important; }

.fav_container textarea {
  background-color: #f2efcf !important;
  font-family: 'Caveat', cursive;
  font-size: 18px;
  line-height: 1.1;
  color: #585645 !important;
  border: none !important;
  padding: 2px;
  resize: none; }

.fav_container textarea:focus {
  border-color: none !important;
  box-shadow: none !important; }

.fav_container--lock {
  display: block;
  position: absolute;
  width: 24px;
  height: 24px;
  right: 0px;
  top: 0px;
  padding: 2px 0px 2px 7px; }
  .fav_container--lock img {
    width: 11px; }

.fav_container:after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0px;
  right: 0px;
  position: absolute;
  top: auto;
  left: auto;
  width: 0px;
  height: 0px;
  border-bottom: 12px solid #ffffff;
  border-left: 12px solid #e2e0ba; }

.bg_color_cement_light .fav_container:after {
  border-bottom: 12px solid #F3F4F7; }

.hero_landing_page {
  padding: 64px 0 72px 0; }
  @media screen and (max-width: 768px) {
    .hero_landing_page {
      padding: 48px 0 56px 0; }
      .hero_landing_page .horizontal_scrollable_items_container {
        position: relative;
        margin: 0 -15px;
        padding-left: 15px; } }

.hero_institutional_page {
  padding: 64px 0 64px 0;
  text-align: center; }
  .hero_institutional_page h1 {
    margin-bottom: 23px; }
  .hero_institutional_page__tageline {
    color: #4f6672;
    text-align: center;
    margin: 0px auto;
    font-size: 14px; }
  @media screen and (max-width: 768px) {
    .hero_institutional_page {
      padding: 48px 0 56px 0; }
      .hero_institutional_page .horizontal_scrollable_items_container {
        position: relative;
        margin: 0 -15px;
        padding-left: 15px; } }

.hero_home {
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: 40px;
  background-color: #FFF; }
  .hero_home h2 {
    font-size: 27px; }
  .hero_home__form {
    padding: 16px 16px 16px 53px;
    border-radius: 48px;
    border: solid 1px #52738A;
    background-color: #FFF;
    display: flex;
    margin-bottom: 20px; }
    @media screen and (max-width: 580px) {
      .hero_home__form {
        flex-direction: row; } }
    .hero_home__form_select {
      padding-right: 38px; }
      .hero_home__form_select .dropdown-toggle {
        color: #000 !important;
        font-size: 20px;
        padding: 5px 0px;
        font-weight: 600 !important; }
    .hero_home__form_input {
      flex-grow: 1;
      padding-left: 38px;
      border-left: 1px solid rgba(82, 115, 138, 0.24);
      padding-right: 20px; }
      .hero_home__form_input input[type="text"] {
        border: none;
        font-size: 20px;
        font-weight: 600;
        padding: 5px 0px; }
    .hero_home__form_button .btn {
      padding: 16px 40px;
      border-radius: 32px;
      background-color: #ff0065;
      color: #FFF;
      font-size: 20px;
      font-weight: bold; }

.blog_content img {
  border-radius: 4px;
  margin-bottom: 20px; }
.blog_content ul li {
  padding: 0px;
  margin: 0px;
  list-style: none;
  display: block;
  padding: 0px 0px 4px 14px;
  position: relative; }
  .blog_content ul li:before {
    position: absolute;
    display: block;
    width: 5px;
    height: 5px;
    background-color: #212529;
    left: 0px;
    top: 7px;
    content: "";
    border-radius: 50%; }

.accordion--tab_header {
  height: 48px;
  line-height: 48px;
  padding-left: 15px;
  padding-right: 15px;
  display: block;
  border-radius: 4px;
  font-weight: bold;
  color: #212529 !important;
  position: relative;
  font-size: 14px;
  background-color: #f3f4f7;
  text-decoration: none !important; }
  .accordion--tab_header:after {
    content: '';
    position: absolute;
    background: url("https://content.harstatic.com/media/icons/arrow-gray-up.svg") no-repeat center center;
    width: 16px;
    height: 16px;
    background-size: 12px;
    right: 16px;
    top: 16px; }
  .accordion--tab_header.collapsed {
    background-color: transparent;
    border-bottom: 1px solid #dfe3f0;
    border-radius: 0px; }
    .accordion--tab_header.collapsed:after {
      content: '';
      position: absolute;
      background: url("https://content.harstatic.com/media/icons/arrow-gray-down.svg") no-repeat center center;
      width: 16px;
      height: 16px;
      background-size: 12px;
      right: 16px;
      top: 16px; }
.accordion--tab_sub {
  padding: 16px; }
  .accordion--tab_sub_tab {
    margin-bottom: 2px; }
    .accordion--tab_sub_tab_header {
      height: 36px;
      line-height: 36px;
      padding-left: 15px;
      padding-right: 15px;
      display: block;
      border-radius: 4px;
      color: #212529 !important;
      position: relative;
      text-decoration: none !important;
      background-color: #f3f4f7; }
      .accordion--tab_sub_tab_header:after {
        content: '';
        position: absolute;
        background: url("https://content.harstatic.com/media/icons/arrow-gray-up.svg") no-repeat center center;
        width: 16px;
        height: 16px;
        background-size: 10px;
        right: 12px;
        top: 12px; }
      .accordion--tab_sub_tab_header.collapsed {
        background-color: rgba(243, 244, 247, 0.4); }
        .accordion--tab_sub_tab_header.collapsed:after {
          content: '';
          position: absolute;
          background: url("https://content.harstatic.com/media/icons/arrow-gray-down.svg") no-repeat center center;
          width: 16px;
          height: 16px;
          background-size: 10px;
          right: 12px;
          top: 12px; }
    .accordion--tab_sub_tab_links_link {
      border-bottom: 1px solid #f3f4f7;
      display: block;
      padding: 12px 16px;
      line-height: 18px; }
      .accordion--tab_sub_tab_links_link:last-child {
        border-bottom: none; }

.circle_btn {
  display: inline-block;
  margin: 7px; }
  .circle_btn div {
    border-radius: 50%;
    width: 47px;
    height: 47px;
    text-align: center;
    line-height: 47px;
    border: 1px solid #dfe3f0;
    margin-bottom: 2px;
    margin-left: auto;
    margin-right: auto; }
  .circle_btn span {
    display: block;
    text-align: center;
    font-size: 12px;
    text-decoration: none; }

.collage_item {
  display: block;
  width: 16.666667%;
  padding-bottom: 12.666667%;
  float: left;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  opacity: 74%; }
  .collage_item:hover {
    filter: none !important;
    opacity: 1; }

.pagination .page-item .page-link {
  min-width: 36px;
  height: 34px;
  padding: .73rem .75rem;
  text-align: center;
  border: 1px solid #DFE3F0;
  color: #042280 !important; }
.pagination .page-item.active .page-link {
  background-color: #EDF0FA;
  border-color: #DFE3F0; }

.alertbox {
  font-size: 11px;
  border-radius: 4px;
  display: inline-block;
  padding: 8px; }
  .alertbox--warning {
    background-color: #fdf7cf;
    color: #945e00; }

.tabuler {
  padding: 12px;
  border-bottom: 1px solid #EDF0FA;
  display: flex; }
  .tabuler--list__img {
    display: block;
    width: 88px; }
    .tabuler--list__img a {
      display: block;
      width: 88px;
      height: 66px;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      border-radius: 2px; }
  .tabuler--list__content {
    display: block;
    width: calc(100% - 88px);
    padding-left: 12px;
    align-self: center;
    color: #3B5363;
    text-align: left; }
    .tabuler--list__content a {
      font-weight: 600; }
    .tabuler--list__content_clear {
      display: none; }
    .tabuler--list__content_address {
      width: 30%;
      float: left; }
    .tabuler--list__content_info {
      width: 14%;
      float: left; }
    .tabuler--list__content_city {
      width: 14%;
      float: left; }
    .tabuler--list__content_listings {
      width: 14%;
      float: left; }
    @media screen and (max-width: 767px) {
      .tabuler--list__content_clear {
        display: block;
        clear: both;
        line-height: 5px; }
      .tabuler--list__content_city, .tabuler--list__content_address {
        width: auto;
        float: none;
        display: inline-block;
        margin-left: 0px; }
      .tabuler--list__content_city {
        clear: right; }
      .tabuler--list__content_info {
        width: auto;
        float: none;
        padding-right: 2px;
        margin-right: 2px;
        border-right: 1px solid #EDF0FA;
        display: inline-block; }
      .tabuler--list__content_listings {
        width: 100%;
        clear: both;
        float: none; } }

.number_oval {
  border: solid 8px #c5531e;
  height: 144px;
  width: 144px;
  border-radius: 50%;
  text-align: center; }

.number_oval_number {
  font-size: 46px;
  color: #c5531e;
  letter-spacing: -2px;
  font-weight: bold;
  line-height: 22px;
  padding-top: 45px;
  padding-bottom: 10px; }

.number_oval_caption {
  font-size: 16px;
  color: #c5531e; }

.number_oval_title {
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #c5531e;
  padding-top: 5px; }

.diamond .number_oval {
  border: solid 8px #14a5cf; }

.diamond .number_oval_number, .diamond .number_oval_title, .diamond .number_oval_caption, .diamond .number_oval_caption {
  color: #14a5cf !important; }

.diamond .number_oval_title path {
  fill: #14a5cf; }

.platinum .number_oval {
  border: solid 8px #adadad; }

.platinum .number_oval_number, .platinum .number_oval_title, .platinum .number_oval_caption, .platinum .number_oval_caption {
  color: #adadad !important; }

.platinum .number_oval_title path {
  fill: #adadad; }

.gold .number_oval {
  border: solid 8px #ff943d; }

.gold .number_oval_number, .gold .number_oval_title, .gold .number_oval_caption, .gold .number_oval_caption {
  color: #ff943d !important; }

.gold .number_oval_title path {
  fill: #ff943d; }

.silver .number_oval {
  border: solid 8px #7f7f7f; }

.silver .number_oval_number, .silver .number_oval_title, .silver .number_oval_caption, .silver .number_oval_caption {
  color: #7f7f7f !important; }

.silver .number_oval_title path {
  fill: #7f7f7f; }

/* inpage nav used in listing detail,heighrise, and other apartment details */
#InpageNav a {
  padding: 17px 24px;
  font-size: 14px;
  display: inline-block;
  color: #042280;
  text-decoration: none;
  border-bottom: 4px solid rgba(0, 0, 0, 0);
  font-weight: 600; }

#InpageNav a:hover {
  opacity: 0.6; }

#InpageNav a.active {
  padding: 17px 24px;
  border-bottom: 4px solid #fd4b78;
  color: #fd4b78 !important; }

/* AVM map popup */
.avm-popover {
  min-width: 320px;
  z-index: 1111111 !important; }

.avm-popover .popover-body {
  padding: 24px; }

.bkl_img, .core_img, .apdis_img {
  max-width: 50%; }

/* Generic styles */
.overflow-inherit {
  overflow: inherit !important; }

/* flags */
.flag {
  border-radius: 2px;
  border: 1px solid #DFE3F0;
  object-fit: cover;
  object-position: center center;
  margin-right: 3px;
  margin-bottom: 4px; }
  .flag--small {
    width: 36px;
    height: 24px; }
  .flag--mini {
    width: 22px;
    height: 16px; }

/* focused dropdpwn */
.noscroll_select {
  overflow: hidden !important; }
  @media screen and (max-width: 767px) {
    .noscroll_select {
      overflow: auto; } }

.focused_dropdown_overlay {
  display: none;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: rgba(0, 0, 0, 0.15);
  z-index: 10002;
  position: fixed;
  /*
  @media screen and (max-width: 767px) {	
  	display: none !important;
  }
  */ }

.focused_dropdown .dropdown-toggle {
  border-radius: 4px;
  padding: 0px 24px 0px 8px !important; }
  .focused_dropdown .dropdown-toggle:after {
    background-position: left center; }
.focused_dropdown.show .dropdown-toggle:after {
  background-position: left center !important; }
.focused_dropdown .dropdown-menu {
  position: relative;
  min-width: 280px;
  padding: 0px 0px 16px 0px;
  top: 10px !important;
  left: -83px !important; }
  @media screen and (max-width: 767px) {
    .focused_dropdown .dropdown-menu {
      right: 0px !important; } }
  .focused_dropdown .dropdown-menu:after {
    width: 282px;
    content: " ";
    position: absolute;
    right: calc(50% - 4px);
    width: 7px;
    top: -7px;
    border-top: none;
    border-right: 7px solid transparent;
    border-left: 7px solid transparent;
    border-bottom: 7px solid #f8f8fa; }
    @media screen and (max-width: 767px) {
      .focused_dropdown .dropdown-menu:after {
        right: 60px; } }
.focused_dropdown .focused_dropdown_header {
  background-color: rgba(243, 244, 247, 0.64);
  padding: 12px 24px;
  color: #515B7A;
  text-align: center;
  margin-bottom: 16px; }
.focused_dropdown .dropdown-item {
  padding: 8px 24px;
  font-size: 14px; }
.focused_dropdown .focused_dropdown_item_icon {
  width: 24px;
  height: 24px;
  margin: 0 8px 0 0;
  opacity: 0.42;
  background-color: #F3F4F7;
  display: inline-block;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 8px;
  float: left; }
.focused_dropdown.dropdown-selected .dropdown-toggle {
  background-color: #F3F4F7; }

.select_listing_overlay, .select_listing_overlay_responsive {
  padding: 0 8px 0 8px;
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.24);
  border: solid 1px #dfe3f0;
  background-color: #ffffff;
  position: fixed;
  bottom: 0px;
  top: auto;
  left: 0px;
  right: 0px;
  z-index: 10001; }

.addprop_cont {
  display: block;
  height: 98px;
  width: 106px;
  margin: 12px;
  text-decoration: none !important; }
  .addprop_cont--empty {
    opacity: 0.72;
    border-radius: 4px;
    border: dashed 2px #AFB8D9;
    background-color: #ffffff;
    font-size: 12px;
    color: #515B7A;
    text-align: center;
    display: inline-flex; }
  .addprop_cont__img {
    display: block;
    width: 106px;
    height: 64px;
    border-radius: 2px;
    overflow: hidden;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 6px; }
  .addprop_cont__text {
    font-size: 11px;
    color: #515B7A;
    text-align: center;
    line-height: 1.27;
    text-decoration: none; }
  .addprop_cont .btn_remove_prop {
    float: right;
    margin-top: 6px;
    margin-right: 6px; }

.disclaimer {
  background-color: #F3F4F7;
  border-radius: 4px;
  padding: 10px;
  text-align: left; }
  .disclaimer__title {
    font-weight: 700;
    font-size: 11px;
    color: #3B5363;
    opacity: 0.8;
    padding-bottom: 5px; }
  .disclaimer__text {
    font-size: 11px;
    color: #3B5363;
    opacity: 0.8; }

.property_select_checkbox {
  width: 93px;
  height: 93px;
  padding: 15px;
  border-radius: 4px;
  background-image: radial-gradient(circle at 0 0, rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0) 71%); }

.responsive_properties {
  max-height: 131px;
  overflow-x: hidden;
  overflow-y: scroll; }

.select_listing_overlay_responsive {
  display: none; }
  @media screen and (max-width: 767px) {
    .select_listing_overlay_responsive {
      display: block; } }

/*# sourceMappingURL=base.cs.map */
