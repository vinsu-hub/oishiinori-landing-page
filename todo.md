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

- [x] Rework the mobile header, hero, CTA hierarchy, and feature strip based on the supplied reference.
- [x] Add mobile signature cards, experience panel, and condensed reservation treatment.
- [x] Preserve desktop layout and existing map, hours, menu, and form interactions.
- [x] Evaluate mobile and desktop screenshots, then save an updated checkpoint.

## Verification notes

Desktop full-page capture shows the intended long-scroll poster composition, readable contrast, and coherent section transitions. Mobile full-page capture shows the two-column menu compressing cleanly, the hero and contact sections stacking, and the footer remaining legible. Generated food images are rendering through the reserved webdev asset URLs.

Browser interaction check: the preview loads with semantic buttons, tabs, form labels, and visible navigation. Selecting the Sushi tab reduces the menu to the three sushi items as expected, and the page content remains readable.

Reservation update verification: the new vermilion booking band appears between the visit and contact sections, with date, time, party size, guest name, and phone/email controls. The mobile capture shows the form stacking cleanly and the reservation CTA remains legible. Type-check and production build both pass.

Final browser check: the header Reserve CTA scrolls to the reservation band, which exposes the expected date, time, party size, name, and contact controls. The live page also confirms the OIshiinori hero lockup and revised footer helper copy.

Contrast-fix verification: desktop and mobile captures now show bright labels, placeholders, values, and underlines against the vermilion reservation band. Native select controls are forced into a light color scheme with dark readable options, while focus states add a clear dark rule and translucent highlight.

Dual-viewport evaluation: desktop preserves the editorial poster rhythm while adding the readable daily hours card beneath the Visit Us actions. Mobile stacks the hours card and reservation band without clipping or overlap. Motion is limited to short lift-in/image-in/panel-in transitions and is disabled under prefers-reduced-motion. The remaining map-open state still needs a direct interaction check.

Map interaction diagnostic: the live preview exposes the Visit Us button and the confirmed daily hours/address. The first browser click did not visibly update the button state, so the DOM click path was tested directly; a follow-up render check is needed before final delivery.

Map-open interaction check: clicking Visit Us changes the action to Hide Map and renders the built-in Google Maps view centered on Oishii Nori at the supplied Laguna coordinates, with an Open in Maps link. Desktop and mobile closed-state captures plus the open desktop map state were reviewed for hierarchy, spacing, and readability.

## Rollback verification

- [x] Roll back to the pre-ramen-hero checkpoint while preserving the prior site features.
- [x] Verify the original OIshiinori hero is restored and reservation, hours, map, and contrast fixes remain.
- [x] Save and deliver the reverted project version.

The correct rollback removed only the ramen opening hero. The OIshiinori cream-paper hero is restored; the MapView, daily hours, reservation section, and reservation contrast fix remain. Type-check passes.

Mobile redesign evaluation: the phone layout now has a charcoal pill navigation with a centered logo medallion, stronger Reserve/View Menu hierarchy, a four-column feature strip, tighter signature menu cards, a dark experience section, and a light paper reservation form with a stamped label. Desktop capture confirms the existing editorial layout remains intact.
