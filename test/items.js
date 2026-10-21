// Test items modelled on the examples at https://bokasafn.ru.is/oscola
// Each case: CSL-JSON item (as Zotero would export it), optional locator/label,
// and the expected footnote + bibliography entry from the RU guide.
const L = (s) => ({ literal: s });            // Zotero "single field" name
const N = (family, given) => ({ family, given }); // Zotero "two field" name

module.exports = [
  {
    id: 'book-is', note: 'Páll Sigurðsson, Samningaréttur: Yfirlit um meginreglur íslensks samningsréttar (Orator 1987) 45.',
    bib: 'Páll Sigurðsson, Samningaréttur: Yfirlit um meginreglur íslensks samningsréttar (Orator 1987)',
    locator: '45',
    item: { type: 'book', author: [L('Páll Sigurðsson')], title: 'Samningaréttur: Yfirlit um meginreglur íslensks samningsréttar', publisher: 'Orator', issued: { 'date-parts': [[1987]] } },
  },
  {
    id: 'book-en', note: 'Paul Craig og Gráinne De Búrca, EU Law: Text, Cases, and Materials (4. útg., Oxford University Press 2008) 227.',
    bib: 'Craig P og De Búrca G, EU Law: Text, Cases, and Materials (4. útg., Oxford University Press 2008)',
    locator: '227',
    item: { type: 'book', author: [N('Craig', 'Paul'), N('De Búrca', 'Gráinne')], title: 'EU Law: Text, Cases, and Materials', edition: '4', publisher: 'Oxford University Press', issued: { 'date-parts': [[2008]] } },
  },
  {
    id: 'book-author-editor', note: 'HLA Hart, Punishment and Responsibility: Essays in the Philosophy of Law (John Gardner ritstj., 2. útg., OUP 2008) 3.',
    bib: 'Hart HLA, Punishment and Responsibility: Essays in the Philosophy of Law (John Gardner ritstj., 2. útg., OUP 2008)',
    locator: '3',
    item: { type: 'book', author: [N('Hart', 'H. L. A.')], editor: [N('Gardner', 'John')], title: 'Punishment and Responsibility: Essays in the Philosophy of Law', edition: '2', publisher: 'OUP', issued: { 'date-parts': [[2008]] } },
  },
  {
    id: 'book-is-editor', note: 'Ágúst Karl Guðmundsson, Milliverðlagning (Viðar Már Matthíasson ritstj., Lagastofnun Háskóla Íslands 2006) 12.',
    bib: 'Ágúst Karl Guðmundsson, Milliverðlagning (Viðar Már Matthíasson ritstj., Lagastofnun Háskóla Íslands 2006)',
    locator: '12',
    item: { type: 'book', author: [L('Ágúst Karl Guðmundsson')], editor: [L('Viðar Már Matthíasson')], title: 'Milliverðlagning', publisher: 'Lagastofnun Háskóla Íslands', issued: { 'date-parts': [[2006]] } },
  },
  {
    id: 'edited-book', note: 'Jeremy Horder (ritstj.), Oxford Essays in Jurisprudence: Fourth Series (OUP 2000) 32–33.',
    bib: 'Horder J (ritstj.), Oxford Essays in Jurisprudence: Fourth Series (OUP 2000)',
    locator: '32-33',
    item: { type: 'book', editor: [N('Horder', 'Jeremy')], title: 'Oxford Essays in Jurisprudence: Fourth Series', publisher: 'OUP', issued: { 'date-parts': [[2000]] } },
  },
  {
    id: 'edited-book-etal', note: 'Páll Sigurðsson o.fl. (ritstj.), Lögfræðiorðabók: með skýringum (Codex: Lagastofnun Háskóla Íslands 2008).',
    bib: 'Páll Sigurðsson o.fl. (ritstj.), Lögfræðiorðabók: með skýringum (Codex: Lagastofnun Háskóla Íslands 2008)',
    item: { type: 'book', editor: [L('Páll Sigurðsson'), L('Barbara Björnsdóttir'), L('Hulda Guðný Kjartansdóttir'), L('Fjórði Ritstjóri')], title: 'Lögfræðiorðabók: með skýringum', publisher: 'Codex: Lagastofnun Háskóla Íslands', issued: { 'date-parts': [[2008]] } },
  },
  {
    id: 'ebook', note: 'Jill E Martin, Hanbury & Martin Modern Equity (19. útg., Kindle útg., Sweet & Maxwell 2012) kafli 1, hluti 2E, 1–008, texti fyrir ofan n. 24.',
    bib: 'Martin JE, Hanbury & Martin Modern Equity (19. útg., Kindle útg., Sweet & Maxwell 2012)',
    locator: '1, hluti 2E, 1-008, texti fyrir ofan n. 24', label: 'chapter',
    item: { type: 'book', author: [N('Martin', 'Jill E.')], title: 'Hanbury & Martin Modern Equity', edition: '19. útg., Kindle útg.', publisher: 'Sweet & Maxwell', issued: { 'date-parts': [[2012]] } },
  },
  {
    id: 'chapter', note: 'Davíð Þór Björgvinsson, „Alþjóðaskuldbindingar um vernd barna gegn kynferðisofbeldi“ í Svala Ísfeld Ólafsdóttir (ritstj.), Hinn launhelgi glæpur: Kynferðisbrot gegn börnum (Háskólaútgáfan 2011) 14.',
    bib: 'Davíð Þór Björgvinsson, „Alþjóðaskuldbindingar um vernd barna gegn kynferðisofbeldi“ í Svala Ísfeld Ólafsdóttir (ritstj.), Hinn launhelgi glæpur: Kynferðisbrot gegn börnum (Háskólaútgáfan 2011)',
    locator: '14',
    item: { type: 'chapter', author: [L('Davíð Þór Björgvinsson')], editor: [L('Svala Ísfeld Ólafsdóttir')], title: 'Alþjóðaskuldbindingar um vernd barna gegn kynferðisofbeldi', 'container-title': 'Hinn launhelgi glæpur: Kynferðisbrot gegn börnum', publisher: 'Háskólaútgáfan', issued: { 'date-parts': [[2011]] }, page: '11-30' },
  },
  {
    id: 'chapter-2authors', note: 'Guðmundur Sigurðsson og Ragnhildur Helgadóttir, „Slysabætur almannatrygginga - opinber réttur - einkaréttarleg sjónarmið“ í Pétur Kr. Hafstein (ritstj.), Guðrúnarbók. Afmælisrit til heiðurs Guðrúnu Erlendsdóttur 3. maí 2006 (Hið íslenska bókmenntafélag 2006) 214.',
    bib: 'Guðmundur Sigurðsson og Ragnhildur Helgadóttir, „Slysabætur almannatrygginga - opinber réttur - einkaréttarleg sjónarmið“ í Pétur Kr. Hafstein (ritstj.), Guðrúnarbók. Afmælisrit til heiðurs Guðrúnu Erlendsdóttur 3. maí 2006 (Hið íslenska bókmenntafélag 2006)',
    locator: '214',
    item: { type: 'chapter', author: [L('Guðmundur Sigurðsson'), L('Ragnhildur Helgadóttir')], editor: [L('Pétur Kr. Hafstein')], title: 'Slysabætur almannatrygginga - opinber réttur - einkaréttarleg sjónarmið', 'container-title': 'Guðrúnarbók. Afmælisrit til heiðurs Guðrúnu Erlendsdóttur 3. maí 2006', publisher: 'Hið íslenska bókmenntafélag', issued: { 'date-parts': [[2006]] } },
  },
  {
    id: 'conf-paper', note: 'Svala Ísfeld Ólafsdóttir, „Viðhorf til kynferðisbrota gegn börnum“ í Trausti Fannar Valsson (ritstj.), Rannsóknir í félagsvísindum X. Lagadeild (Félagsvísindastofnun Háskóla Íslands 2009) 260.',
    bib: 'Svala Ísfeld Ólafsdóttir, „Viðhorf til kynferðisbrota gegn börnum“ í Trausti Fannar Valsson (ritstj.), Rannsóknir í félagsvísindum X. Lagadeild (Félagsvísindastofnun Háskóla Íslands 2009)',
    locator: '260',
    item: { type: 'paper-conference', author: [L('Svala Ísfeld Ólafsdóttir')], editor: [L('Trausti Fannar Valsson')], title: 'Viðhorf til kynferðisbrota gegn börnum', 'container-title': 'Rannsóknir í félagsvísindum X. Lagadeild', publisher: 'Félagsvísindastofnun Háskóla Íslands', issued: { 'date-parts': [[2009]] }, page: '255-265' },
  },
  {
    id: 'journal', note: 'Margrét Einarsdóttir, „Forgangsáhrif réttilega innleiddra EES-reglna“ (2010) 7 Tímarit Lögréttu 25, 30.',
    bib: 'Margrét Einarsdóttir, „Forgangsáhrif réttilega innleiddra EES-reglna“ (2010) 7 Tímarit Lögréttu 25',
    locator: '30',
    item: { type: 'article-journal', author: [L('Margrét Einarsdóttir')], title: 'Forgangsáhrif réttilega innleiddra EES-reglna', 'container-title': 'Tímarit Lögréttu', volume: '7', page: '25-50', issued: { 'date-parts': [[2010]] } },
  },
  {
    id: 'journal-issue', note: 'Sif Konráðsdóttir, „Refsingar í kynferðisbrotamálum“ (2001) 3(1) Lagakrókar 28.',
    bib: 'Sif Konráðsdóttir, „Refsingar í kynferðisbrotamálum“ (2001) 3(1) Lagakrókar 28',
    item: { type: 'article-journal', author: [L('Sif Konráðsdóttir')], title: 'Refsingar í kynferðisbrotamálum', 'container-title': 'Lagakrókar', volume: '3', issue: '1', page: '28', issued: { 'date-parts': [[2001]] } },
  },
  {
    id: 'journal-novol', note: 'Jón Jónsson, „Grein án árgangs“ [2015] Úlfljótur 101, 105.',
    bib: 'Jón Jónsson, „Grein án árgangs“ [2015] Úlfljótur 101',
    locator: '105',
    item: { type: 'article-journal', author: [L('Jón Jónsson')], title: 'Grein án árgangs', 'container-title': 'Úlfljótur', page: '101', issued: { 'date-parts': [[2015]] } },
  },
  {
    id: 'journal-online', note: 'David Jordhus-Lier, „Community Resistance to Megaprojects: The Case of the N2 Gateway Project in Joe Slovo Informal Settlement, Cape Town“ (2015) 45 Habitat International 169, 171 <http://www.sciencedirect.com/science/article/pii/S019739751400037X> skoðað 21. apríl 2020.',
    bib: 'Jordhus-Lier D, „Community Resistance to Megaprojects: The Case of the N2 Gateway Project in Joe Slovo Informal Settlement, Cape Town“ (2015) 45 Habitat International 169 <http://www.sciencedirect.com/science/article/pii/S019739751400037X> skoðað 21. apríl 2020',
    locator: '171',
    item: { type: 'article-journal', author: [N('Jordhus-Lier', 'David')], title: 'Community Resistance to Megaprojects: The Case of the N2 Gateway Project in Joe Slovo Informal Settlement, Cape Town', 'container-title': 'Habitat International', volume: '45', page: '169-178', issued: { 'date-parts': [[2015]] }, URL: 'http://www.sciencedirect.com/science/article/pii/S019739751400037X', accessed: { 'date-parts': [[2020, 4, 21]] } },
  },
  {
    id: 'encyclopedia', note: 'CJ Friedrich, „Constitutions and Constitutionalism“, International Encyclopedia of the Social Sciences III (1968) 319, 320.',
    bib: 'Friedrich CJ, „Constitutions and Constitutionalism“, International Encyclopedia of the Social Sciences III (1968) 319',
    locator: '320',
    item: { type: 'entry-encyclopedia', author: [N('Friedrich', 'C. J.')], title: 'Constitutions and Constitutionalism', 'container-title': 'International Encyclopedia of the Social Sciences III', page: '319', issued: { 'date-parts': [[1968]] } },
  },
  {
    id: 'encyclopedia-online', note: 'Leslie Green, „Legal Positivism“, The Stanford Encyclopedia of Philosophy (haust útg., 2009) <http://plato.stanford.edu/archives/fall2009/entries/legal-positivism> skoðað 20. nóvember 2009.',
    bib: 'Green L, „Legal Positivism“, The Stanford Encyclopedia of Philosophy (haust útg., 2009) <http://plato.stanford.edu/archives/fall2009/entries/legal-positivism> skoðað 20. nóvember 2009',
    item: { type: 'entry-encyclopedia', author: [N('Green', 'Leslie')], title: 'Legal Positivism', 'container-title': 'The Stanford Encyclopedia of Philosophy', edition: 'haust útg.', issued: { 'date-parts': [[2009]] }, URL: 'http://plato.stanford.edu/archives/fall2009/entries/legal-positivism', accessed: { 'date-parts': [[2009, 11, 20]] } },
  },
  {
    id: 'dictionary', note: '„no-fault compensation“, Oxford Dictionary of Law (7. útg., OUP 2013).',
    bib: '„no-fault compensation“, Oxford Dictionary of Law (7. útg., OUP 2013)',
    item: { type: 'entry-dictionary', title: 'no-fault compensation', 'container-title': 'Oxford Dictionary of Law', edition: '7', publisher: 'OUP', issued: { 'date-parts': [[2013]] } },
  },
  {
    id: 'newspaper', note: 'Jón Hákon Halldórsson, „Þúsundir lánasamninga í óvissu vegna álits EFTA-dómstólsins“ Fréttablaðið (Reykjavík, 25. nóvember 2014) 4.',
    bib: 'Jón Hákon Halldórsson, „Þúsundir lánasamninga í óvissu vegna álits EFTA-dómstólsins“ Fréttablaðið (Reykjavík, 25. nóvember 2014)',
    locator: '4',
    item: { type: 'article-newspaper', author: [L('Jón Hákon Halldórsson')], title: 'Þúsundir lánasamninga í óvissu vegna álits EFTA-dómstólsins', 'container-title': 'Fréttablaðið', 'publisher-place': 'Reykjavík', issued: { 'date-parts': [[2014, 11, 25]] } },
  },
  {
    id: 'newspaper-web', note: '„Íslenskra dómstóla að ákvarða“ mbl.is (Reykjavík, 24. nóvember 2014) mgr. 1 <http://www.mbl.is/frettir/innlent/2014/11/24/slenskra_domstola_ad_akvarda/> skoðað 25. nóvember 2014.',
    bib: '„Íslenskra dómstóla að ákvarða“ mbl.is (Reykjavík, 24. nóvember 2014) <http://www.mbl.is/frettir/innlent/2014/11/24/slenskra_domstola_ad_akvarda/> skoðað 25. nóvember 2014',
    locator: '1', label: 'paragraph',
    item: { type: 'article-newspaper', title: 'Íslenskra dómstóla að ákvarða', 'container-title': 'mbl.is', 'publisher-place': 'Reykjavík', issued: { 'date-parts': [[2014, 11, 24]] }, URL: 'http://www.mbl.is/frettir/innlent/2014/11/24/slenskra_domstola_ad_akvarda/', accessed: { 'date-parts': [[2014, 11, 25]] } },
  },
  {
    id: 'webpage', note: 'Heilbrigðisráðuneytið, „Covid-19: Breyttar reglur um takmarkanir á landamærunum 1. október“ (Stjórnarráð Íslands, 28. september 2021) mgr. 1 <https://www.stjornarradid.is/x> skoðað 28. september 2021.',
    bib: 'Heilbrigðisráðuneytið, „Covid-19: Breyttar reglur um takmarkanir á landamærunum 1. október“ (Stjórnarráð Íslands, 28. september 2021) <https://www.stjornarradid.is/x> skoðað 28. september 2021',
    locator: '1', label: 'paragraph',
    item: { type: 'webpage', author: [L('Heilbrigðisráðuneytið')], title: 'Covid-19: Breyttar reglur um takmarkanir á landamærunum 1. október', 'container-title': 'Stjórnarráð Íslands', issued: { 'date-parts': [[2021, 9, 28]] }, URL: 'https://www.stjornarradid.is/x', accessed: { 'date-parts': [[2021, 9, 28]] } },
  },
  {
    id: 'blog', note: 'Egill Helgason, „Ekki þarflaust“ (Silfur Egils, 13. september 2011) kafli 2, málsgr. 1 <http://silfuregils.eyjan.is/2011/09/13/ekki-tharflaust/> skoðað 30. desember 2011.',
    bib: 'Egill Helgason, „Ekki þarflaust“ (Silfur Egils, 13. september 2011) <http://silfuregils.eyjan.is/2011/09/13/ekki-tharflaust/> skoðað 30. desember 2011',
    locator: '2, málsgr. 1', label: 'chapter',
    item: { type: 'post-weblog', author: [L('Egill Helgason')], title: 'Ekki þarflaust', 'container-title': 'Silfur Egils', issued: { 'date-parts': [[2011, 9, 13]] }, URL: 'http://silfuregils.eyjan.is/2011/09/13/ekki-tharflaust/', accessed: { 'date-parts': [[2011, 12, 30]] } },
  },
  {
    id: 'report', note: 'Umboðsmaður barna, „Skýrsla umboðsmanns barna 2018“ (Umboðsmaður barna 2019) 8.',
    bib: 'Umboðsmaður barna, „Skýrsla umboðsmanns barna 2018“ (Umboðsmaður barna 2019)',
    locator: '8',
    item: { type: 'report', author: [L('Umboðsmaður barna')], title: 'Skýrsla umboðsmanns barna 2018', publisher: 'Umboðsmaður barna', issued: { 'date-parts': [[2019]] } },
  },
  {
    id: 'report-web', note: 'Sérfræðingahópur um skuldavanda heimilanna, „Skýrsla sérfræðingahóps um skuldavanda heimilanna“ (Forsætisráðuneytið 10. nóvember 2010) 15 <www.forsaetisraduneyti.is/media/Skyrslur/skyrla-skuldavandi-heimila.pdf> skoðað 5. janúar 2012.',
    bib: 'Sérfræðingahópur um skuldavanda heimilanna, „Skýrsla sérfræðingahóps um skuldavanda heimilanna“ (Forsætisráðuneytið 10. nóvember 2010) <www.forsaetisraduneyti.is/media/Skyrslur/skyrla-skuldavandi-heimila.pdf> skoðað 5. janúar 2012',
    locator: '15',
    item: { type: 'report', author: [L('Sérfræðingahópur um skuldavanda heimilanna')], title: 'Skýrsla sérfræðingahóps um skuldavanda heimilanna', publisher: 'Forsætisráðuneytið', issued: { 'date-parts': [[2010, 11, 10]] }, URL: 'www.forsaetisraduneyti.is/media/Skyrslur/skyrla-skuldavandi-heimila.pdf', accessed: { 'date-parts': [[2012, 1, 5]] } },
  },
  {
    id: 'report-noauthor', note: '„Annual Report 2021“ (World Trade Organization 1996) 5.',
    bib: '„Annual Report 2021“ (World Trade Organization 1996)',
    locator: '5',
    item: { type: 'report', title: 'Annual Report 2021', publisher: 'World Trade Organization', issued: { 'date-parts': [[1996]] } },
  },
  {
    id: 'conf-talk', note: 'Ben McFarlane og Donal Nolan, „Remedying Reliance: The Future Development of Promisory and Proprietary Estoppel in English Law“ (Obligations III conference, Brisbane júlí 2006).',
    bib: 'McFarlane B og Nolan D, „Remedying Reliance: The Future Development of Promisory and Proprietary Estoppel in English Law“ (Obligations III conference, Brisbane júlí 2006)',
    item: { type: 'report', author: [N('McFarlane', 'Ben'), N('Nolan', 'Donal')], title: 'Remedying Reliance: The Future Development of Promisory and Proprietary Estoppel in English Law', publisher: 'Obligations III conference, Brisbane', issued: { 'date-parts': [[2006, 7]] } },
  },
  {
    id: 'thesis', note: 'Elva Dögg Ásu-og Kristinsdóttir, „Fremjendur ofbeldis í nánum samböndum og samfélagsleg viðbrögð“ (ML-ritgerð, Háskólinn í Reykjavík 2010) 73 <http://skemman.is/handle/1946/6892> skoðað 1. desember 2014.',
    bib: 'Elva Dögg Ásu-og Kristinsdóttir, „Fremjendur ofbeldis í nánum samböndum og samfélagsleg viðbrögð“ (ML-ritgerð, Háskólinn í Reykjavík 2010) <http://skemman.is/handle/1946/6892> skoðað 1. desember 2014',
    locator: '73',
    item: { type: 'thesis', author: [L('Elva Dögg Ásu-og Kristinsdóttir')], title: 'Fremjendur ofbeldis í nánum samböndum og samfélagsleg viðbrögð', genre: 'ML-ritgerð', publisher: 'Háskólinn í Reykjavík', issued: { 'date-parts': [[2010]] }, URL: 'http://skemman.is/handle/1946/6892', accessed: { 'date-parts': [[2014, 12, 1]] } },
  },
  {
    id: 'slides', note: 'Sigurjón Högnason, „Skuldsett yfirtaka og öfugur samruni. Ágreiningur um skattalega meðhöndlun vaxtagjalda“ (Fróðleikur á fimmtudegi, 26. janúar 2012) glæra 2.',
    bib: 'Sigurjón Högnason, „Skuldsett yfirtaka og öfugur samruni. Ágreiningur um skattalega meðhöndlun vaxtagjalda“ (Fróðleikur á fimmtudegi, 26. janúar 2012)',
    locator: 'glæra 2', label: 'page',
    item: { type: 'speech', author: [L('Sigurjón Högnason')], title: 'Skuldsett yfirtaka og öfugur samruni. Ágreiningur um skattalega meðhöndlun vaxtagjalda', 'event-title': 'Fróðleikur á fimmtudegi', issued: { 'date-parts': [[2012, 1, 26]] } },
  },
  {
    id: 'interview', note: 'Guðjón Baldursson, trúnaðarlæknir, viðtal við höfund (Reykjavík 24. apríl 2019).',
    bib: 'Guðjón Baldursson, trúnaðarlæknir, viðtal við höfund (Reykjavík 24. apríl 2019)',
    item: { type: 'interview', author: [L('Guðjón Baldursson')], interviewer: [L('Höfundur Ritgerðar')], title: 'trúnaðarlæknir, viðtal við höfund', 'publisher-place': 'Reykjavík', issued: { 'date-parts': [[2019, 4, 24]] } },
  },
  {
    id: 'email', note: 'Marel, tölvupóstur til höfundar (25. mars 2014).',
    bib: 'Marel, tölvupóstur til höfundar (25. mars 2014)',
    item: { type: 'interview', author: [L('Marel')], title: 'tölvupóstur til höfundar', issued: { 'date-parts': [[2014, 3, 25]] } },
  },
  {
    id: 'letter', note: 'Jóna Jónsdóttir, bréf til Evu Hrafnsdóttur (1. júlí 2012).',
    bib: 'Jóna Jónsdóttir, bréf til Evu Hrafnsdóttur (1. júlí 2012)',
    item: { type: 'personal_communication', author: [L('Jóna Jónsdóttir')], title: 'bréf til Evu Hrafnsdóttur', recipient: [L('Eva Hrafnsdóttir')], issued: { 'date-parts': [[2012, 7, 1]] } },
  },
  // ---------------- primary sources: everything in the title field ----------------
  {
    id: 'statute', note: 'Almenn hegningarlög nr. 19/1940, 8. gr.',
    bib: 'Almenn hegningarlög nr. 19/1940',
    suffix: ', 8. gr.',
    item: { type: 'legislation', title: 'Almenn hegningarlög nr. 19/1940', issued: { 'date-parts': [[1940, 2, 12]] }, 'container-title': 'Stjórnartíðindi' },
  },
  {
    id: 'regulation', note: 'Reglugerð um rafrænar undirskriftir nr. 780/2011.',
    bib: 'Reglugerð um rafrænar undirskriftir nr. 780/2011',
    item: { type: 'legislation', title: 'Reglugerð um rafrænar undirskriftir nr. 780/2011' },
  },
  {
    id: 'case', note: 'Tryggingastofnun ríkisins g. Öryrkjabandalagi Íslands, Hrd. 19. desember 2000 í máli nr. 125/2000, kafli IV, mgr. 6.',
    bib: 'Tryggingastofnun ríkisins g. Öryrkjabandalagi Íslands, Hrd. 19. desember 2000 í máli nr. 125/2000',
    suffix: ', kafli IV, mgr. 6.',
    item: { type: 'legal_case', title: 'Tryggingastofnun ríkisins g. Öryrkjabandalagi Íslands, Hrd. 19. desember 2000 í máli nr. 125/2000', authority: 'Hæstiréttur', issued: { 'date-parts': [[2000, 12, 19]] }, number: '125/2000' },
  },
  {
    id: 'case-print', note: 'Hrd. 1999, 2015, 2017.',
    bib: 'Hrd. 1999, 2015',
    locator: '2017',
    item: { type: 'legal_case', title: 'Hrd. 1999, 2015' },
  },
  {
    id: 'case-eu', note: 'Mál C-176/03 Commission g. Council EU:C:2005:542, [2005] ECR I-7879.',
    bib: 'Mál C-176/03 Commission g. Council EU:C:2005:542, [2005] ECR I-7879',
    item: { type: 'legal_case', title: 'Mál C-176/03 <i>Commission g. Council</i> EU:C:2005:542, [2005] ECR I-7879' },
  },
  {
    id: 'bill', note: 'Alþt. 2010-2011, A-deild, þskj. 82 – 78. mál, athugasemdir við 5. gr., mgr. 7.',
    bib: 'Alþt. 2010-2011, A-deild, þskj. 82 – 78. mál',
    suffix: ', athugasemdir við 5. gr., mgr. 7.',
    item: { type: 'bill', title: 'Alþt. 2010-2011, A-deild, þskj. 82 – 78. mál', number: '82' },
  },
  {
    id: 'ua', note: 'Álit umboðsmanns Alþingis 1. júlí 2008 í máli nr. 444/2007, kafli IV(2), mgr. 12.',
    bib: 'Álit umboðsmanns Alþingis 1. júlí 2008 í máli nr. 444/2007',
    suffix: ', kafli IV(2), mgr. 12.',
    item: { type: 'legal_case', title: 'Álit umboðsmanns Alþingis 1. júlí 2008 í máli nr. 444/2007' },
  },
  {
    id: 'treaty', note: 'Samningur um afnám allrar mismununar gagnvart konum (samþykktur 18. desember 1979, tók gildi 3. september 1981) Stjtíð. C, 5/1985.',
    bib: 'Samningur um afnám allrar mismununar gagnvart konum (samþykktur 18. desember 1979, tók gildi 3. september 1981) Stjtíð. C, 5/1985',
    item: { type: 'legislation', title: 'Samningur um afnám allrar mismununar gagnvart konum (samþykktur 18. desember 1979, tók gildi 3. september 1981) Stjtíð. C, 5/1985' },
  },
];
