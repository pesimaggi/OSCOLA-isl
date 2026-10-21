# OSCOLA – Íslenska (Zotero/CSL)

A Zotero citation style for OSCOLA (4th ed.) adapted to Icelandic writing, following the Reykjavik University library guide: <https://bokasafn.ru.is/oscola/oscolaheild>.

File: [`oscola-islenska.csl`](oscola-islenska.csl)

## Installing in Zotero

1. Download `oscola-islenska.csl`.
2. In Zotero, open **Settings → Cite → Styles**, click **+**, and choose the file. You can also double-click the file or drag it into Zotero.
3. In the Word or LibreOffice plugin, choose **OSCOLA - Íslenska** under *Document Preferences*.

The style keeps the ID of the earlier `oscola_isl` style, so Zotero replaces the old version instead of installing a second copy.

## What the style does

| | Example |
|---|---|
| Icelandic abbreviations with a full stop | `4. útg.`, `ritstj.`, `þýð.`, `mgr. 1`, `kafli 2`, `o.fl.` |
| Icelandic quotation marks | „Titill“ |
| Icelandic dates | `skoðað 21. apríl 2020` |
| Titles printed exactly as entered (no automatic Title Case) | *Samningaréttur: Yfirlit um meginreglur íslensks samningsréttar* |
| ibid / cross-reference | `Sama heimild 50.` / `Páll Sigurðsson (n. 1) 60.` |
| Primary sources printed exactly as typed in the title field | `Hrd. 19. desember 2000 í máli nr. 125/2000, kafli IV, mgr. 6.` |
| Bibliography: Icelandic names in full, foreign names as "Surname Initials" | `Páll Sigurðsson, …` / `Craig P og De Búrca G, …` |
| Bibliography ordered by the Icelandic alphabet; repeated author shown as `——` | |
| Secondary sources first, then laws → Alþingistíðindi → cases | |

## How to enter sources in Zotero

These rules follow the RU guide. The style depends on them.

### Author names

* **Icelandic names: use one field** ("Switch to single field" next to the name). Enter the name as *Páll Sigurðsson*. It is then printed unchanged everywhere, and the bibliography sorts it by first name.
* **Foreign names: use two fields** (last name / first name). The footnote shows *Paul Craig*; the bibliography shows *Craig P*.
* Enter every author. The style prints the first author plus `o.fl.` when there are four or more.

### Primary sources (laws, cases, Alþingistíðindi, rulings, treaties)

Use only three item types, and put the **whole citation** in the title field:

| Item type | Field | Example |
|---|---|---|
| Statute | Name of Act | `Almenn hegningarlög nr. 19/1940` |
| Case | Case Name | `Hrd. 19. desember 2000 í máli nr. 125/2000` |
| Bill | Title | `Alþt. 2010-2011, A-deild, þskj. 82 – 78. mál` |

* Put the pinpoint in the **Suffix** field when citing, starting with a comma: `, 8. gr.` or `, kafli IV, mgr. 6`.
* For italics, wrap text in `<i>…</i>`. Example: `Mál C-176/03 <i>Commission g. Council</i> EU:C:2005:542`.
* Add a nickname in the Suffix too, e.g. ` (hgl.)`.
* Other fields on these items (court, date, etc.) are ignored.

### Secondary sources

* **Book / Book Section / Journal Article / Newspaper Article / Web Page / Blog Post / Report / Thesis / Encyclopedia Article / Dictionary Entry / Conference Paper / Presentation**: fill in the fields normally.
* **Edition**: enter only the number (`4`), which prints as `4. útg.`. Text such as `endursk. útg.` is printed as written.
* **Pinpoint**: use the *Page* locator for page numbers, which print without a label. *Paragraph* gives `mgr. 1` and *Chapter* gives `kafli 2`.
* **Journals**: enter *Issue* only when each issue starts at page 1. It prints as `(2018) 2(3)`.
* **Printed articles**: delete the URL. A URL with `skoðað` date is printed whenever the URL field is filled.
* **Interviews, letters and emails**: use the *Interview* item type.
  * Put the person in *Interview with* and the rest in *Title*, e.g. `trúnaðarlæknir, viðtal við höfund`.
  * To add a place, put `publisher-place: Reykjavík` in *Extra*. Output: `Guðjón Baldursson, trúnaðarlæknir, viðtal við höfund (Reykjavík 24. apríl 2019).`
* **Unpublished conference talk**: use *Report* and put "Conference name, place" in *Institution*.

### Primary-source lists

Zotero places primary sources at the end of the bibliography, grouped by type. Move them into the separate primary-source lists at the front of the thesis as the RU guide describes.

## Tests

`test/` (which includes `locales-is-IS.xml` from the [CSL locales project](https://github.com/citation-style-language/locales), CC BY-SA 3.0) renders about 40 examples from the RU guide with citeproc-js, the engine Zotero uses, and compares them with the expected output:

```sh
cd test
npm install
npm test
```
