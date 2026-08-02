GROCERY BUDDY FOR IPHONE — VERSION 1.6.1

BASELINE
- Built directly from the tested Version 1.4.0 app.
- Preserves saved meal plans, exact in-app recipes, ingredient quantities, side choices, checked-item hiding, Reminders sharing, and the corrected icon.

HOTFIX 1.6.1
- Fixed Send groceries line by line / Send meals line by line: Grocery Buddy now copies the text and explicitly passes the clipboard as Shortcut Input to Add Grocery Buddy List.
- This fixes the failure where the Shortcut launched but received no items.
- Updated the offline cache version so iPhone installs receive the corrected app.js.

WHAT CHANGED FROM 1.4.0
- Expanded the curated catalog from 48 to 108 meals.
- Every category now has 18 meals: Mediterranean, American, Italian, Mexican, Asian-inspired, and Comfort.
- Replaced random Swap with a searchable Choose Meal screen.
- Meal choices can be filtered by style and by 30-minutes-or-less.
- The chooser shows time, estimated meal cost, major ingredients, and sale matches.
- Added a Kroger weekly sale helper. Paste one sale item per line from the weekly ad.
- Generated plans favor recipes using more matched sale ingredients.
- Matching sale information appears in meal metadata, recipe ingredients, the grocery list, and Reminders export text.
- Added an in-app button that launches a separate shortcut named Grocery to Kroger.
- Added in-app Shortcut setup instructions and a printable text guide.

KROGER SALES LIMITATION
This remains an offline Home Screen web app. It does not store Kroger credentials and does not place a Kroger API client secret in browser JavaScript. Version 1.6.0 therefore uses sale lines pasted from the Kroger weekly ad. A future connected version can replace this helper with live store-specific product and promotion data through a secure backend.

GROCERY TO KROGER WORKFLOW
1. Generate the meal plan and choose any replacement meals.
2. Review the grocery list and check off anything already on hand.
3. Send the remaining items to the Grocery list in Apple Reminders.
4. Tap Run Grocery to Kroger Shortcut in Grocery Buddy.
5. The shortcut copies the product name before the em dash, opens Kroger, and repeats through the incomplete reminders.

SHORTCUT INSTALLATION
Read Grocery_to_Kroger_Shortcut_Setup.txt or tap Shortcut setup inside Grocery Buddy. Name the shortcut exactly Grocery to Kroger so the in-app launch button can find it.

INSTALL / UPDATE
Upload this folder's contents to the same web host used for Version 1.4.0. Open the hosted page in Safari and refresh once before reopening the Home Screen app. If the old cache remains, close the Home Screen app, reopen the page in Safari, refresh, and then relaunch. Removing and re-adding the Home Screen icon is only necessary if Safari continues to show the old version or icon.


V1.6.0 additions:
- Favorites with a Favorites-only meal picker filter.
- Explicit Planned, Made, Carry Over, and Skipped meal statuses.
- Last-made history updates only when a meal is marked Made.
- Carry all unmade meals into the next plan.
- Restored line-by-line Reminders Shortcut export.
- Short Kroger-compatible grocery text.
- Removed the obsolete Kroger store/area field.
