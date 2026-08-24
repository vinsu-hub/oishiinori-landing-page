# OIshiinori Landing Page Tasks

- [x] Inspect the supplied menu spreadsheet and identify usable categories, item names, descriptions, and prices.
- [x] Create `ideas.md` with the reference-driven visual direction and style decisions.
- [x] Upload and reference the supplied OIshiinori logo using the webdev asset workflow.
- [x] Build the long-form landing page sections to mirror the provided reference composition.
- [x] Add menu filtering, CTA interactions, contact form behavior, and responsive navigation.
- [x] Run type-check/build validation and capture representative desktop/mobile screenshots.
- [x] Save the final project checkpoint and deliver the project version to the user.
- [x] Add a reference-matched Reserve a Table section with date, time, party size, and guest details.
- [x] Connect Checkout and relevant visit CTAs to the reservation section.
- [x] Verify reservation form feedback and responsive behavior, then save an updated checkpoint.

- [x] Diagnose the reservation form contrast and native select styling.
- [x] Apply readable control text, placeholder, option, focus, and autofill colors.
- [x] Verify the corrected reservation form on desktop and mobile, then save a checkpoint.

- [x] Add standard opening and closing hours to the visit area.
- [x] Add a Visit Us map view using the shop's exact address or map link.
- [x] Verify map interaction and responsive layout, then save a checkpoint.

- [x] Add standard opening and closing hours with the confirmed Laguna shop details.
- [x] Make Visit Us reveal an accurate map view for Oishii Nori at the supplied location.
- [x] Add clean scroll, reveal, hover, and reduced-motion-safe animation.
- [x] Evaluate desktop and mobile UI states and save an updated checkpoint.

- [x] Add the supplied ramen artwork as the opening hero visual.
- [x] Build scroll-driven parallax, zoom, label reveal, and transition behavior.
- [x] Evaluate the opening hero on desktop and mobile, respecting reduced motion.
- [x] Save and deliver the animated hero checkpoint.

## Verification notes

Desktop full-page capture shows the intended long-scroll poster composition, readable contrast, and coherent section transitions. Mobile full-page capture shows the two-column menu compressing cleanly, the hero and contact sections stacking, and the footer remaining legible. Generated food images are rendering through the reserved webdev asset URLs.

Browser interaction check: the preview loads with semantic buttons, tabs, form labels, and visible navigation. Selecting the Sushi tab reduces the menu to the three sushi items as expected, and the page content remains readable.

Reservation update verification: the new vermilion booking band appears between the visit and contact sections, with date, time, party size, guest name, and phone/email controls. The mobile capture shows the form stacking cleanly and the reservation CTA remains legible. Type-check and production build both pass.

Final browser check: the header Reserve CTA scrolls to the reservation band, which exposes the expected date, time, party size, name, and contact controls. The live page also confirms the OIshiinori hero lockup and revised footer helper copy.

Contrast-fix verification: desktop and mobile captures now show bright labels, placeholders, values, and underlines against the vermilion reservation band. Native select controls are forced into a light color scheme with dark readable options, while focus states add a clear dark rule and translucent highlight.

Dual-viewport evaluation: desktop preserves the editorial poster rhythm while adding the readable daily hours card beneath the Visit Us actions. Mobile stacks the hours card and reservation band without clipping or overlap. Motion is limited to short lift-in/image-in/panel-in transitions and is disabled under prefers-reduced-motion. The remaining map-open state still needs a direct interaction check.

Map interaction diagnostic: the live preview exposes the Visit Us button and the confirmed daily hours/address. The first browser click did not visibly update the button state, so the DOM click path was tested directly; a follow-up render check is needed before final delivery.

Map-open interaction check: clicking Visit Us changes the action to Hide Map and renders the built-in Google Maps view centered on Oishii Nori at the supplied Laguna coordinates, with an Open in Maps link. Desktop and mobile closed-state captures plus the open desktop map state were reviewed for hierarchy, spacing, and readability.

Opening-hero evaluation: desktop shows the ramen artwork, OIshiinori lockup, ingredient guides, CTA, and scroll cue in a clear first-frame composition. Mobile preserves the central bowl and brand lockup, but the cover crop trims parts of the baked-in side labels and bottom title; the artwork should use a contained crop to preserve the supplied composition on narrow screens.

Final opening-hero evaluation: desktop and mobile now preserve the complete ramen artwork with a contained crop, keep the OIshiinori logo lockup visible, and maintain readable CTA/scroll-cue contrast. The scroll-driven variables compile cleanly, and the mobile composition keeps the bowl, title, and nutrition callout inside the viewport.
