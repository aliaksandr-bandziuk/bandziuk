// DEV ONLY: landing pages that are written but not yet in Sanity.
//
// On `npm run dev`, [lang]/[...slug] falls back to these fixtures when Sanity
// has no page for the slug, so a new page is reviewed on its real address
// (http://localhost:3000/restaurant-seo) with the real components, metadata and
// JSON-LD. A page that exists in Sanity always wins over its fixture.
//
// Why not a test document in Sanity: the site's client has no `perspective`,
// so with apiVersion 2023-10-16 it reads drafts too, and a test draft would
// surface on the live site and in the sitemap.
//
// In a production build (Vercel included) both functions return nothing, so
// no fixture can ever be rendered or listed there.
//
// To add a page: create src/dev-fixtures/<slug>.<lang>.ts and list it below.
import groq from "groq";
import { client } from "@/sanity/sanity.client";
import { getFormStandardDocumentByLang } from "@/sanity/sanity.utils";
import { restaurantWebsiteDesignEn } from "./restaurant-website-design.en";
import { restaurantWebsiteDesignRu } from "./restaurant-website-design.ru";
import { restaurantSeoEn } from "./restaurant-seo.en";
import { restaurantSeoPl } from "./restaurant-seo.pl";
import { restaurantSeoRu } from "./restaurant-seo.ru";
import { constructionWebsiteDesignEn } from "./construction-website-design.en";
import { constructionWebsiteDesignRu } from "./construction-website-design.ru";
import { constructionSeoEn } from "./construction-seo.en";
import { constructionSeoRu } from "./construction-seo.ru";
import { constructionSeoPl } from "./construction-seo.pl";
import { constructionCompanyWebsiteEn } from "./construction-company-website.en";
import { constructionCompanyWebsitePl } from "./construction-company-website.pl";
import { constructionCompanyWebsiteRu } from "./construction-company-website.ru";
import { contractorWebsiteDesignEn } from "./contractor-website-design.en";
import { websiteForContractorsEn } from "./website-for-contractors.en";
import { websiteForContractorsRu } from "./website-for-contractors.ru";
import { seoForContractorsEn } from "./seo-for-contractors.en";
import { localSeoForContractorsEn } from "./local-seo-for-contractors.en";
import { aiSeoServicesEn } from "./ai-seo-services.en";
import { aiSeoServicesPl } from "./ai-seo-services.pl";
import { aiSeoServicesRu } from "./ai-seo-services.ru";
import { aiSeoConsultantEn } from "./ai-seo-consultant.en";
import { aiSeoConsultantPl } from "./ai-seo-consultant.pl";
import { aiSeoConsultantRu } from "./ai-seo-consultant.ru";
import { chatgptSeoServicesEn } from "./chatgpt-seo-services.en";
import { chatgptSeoServicesPl } from "./chatgpt-seo-services.pl";
import { chatgptSeoServicesRu } from "./chatgpt-seo-services.ru";
import { llmSeoServicesEn } from "./llm-seo-services.en";
import { llmSeoServicesPl } from "./llm-seo-services.pl";
import { llmSeoServicesRu } from "./llm-seo-services.ru";
import { electricianWebsiteDesignEn } from "./electrician-website-design.en";
import { hvacSeoEn } from "./hvac-seo.en";
import { hvacWebsiteDesignEn } from "./hvac-website-design.en";
import { hvacWebsitesEn } from "./hvac-websites.en";
import { landscapingSeoEn } from "./landscaping-seo.en";
import { landscapingWebsiteDesignEn } from "./landscaping-website-design.en";
import { lawnCareWebsiteEn } from "./lawn-care-website.en";
import { localSeoForPlumbersEn } from "./local-seo-for-plumbers.en";
import { plumbingWebsiteDesignEn } from "./plumbing-website-design.en";
import { roofingSeoEn } from "./roofing-seo.en";
import { roofingWebsiteDesignEn } from "./roofing-website-design.en";
import { roofingWebsitesEn } from "./roofing-websites.en";
import { seoForElectriciansEn } from "./seo-for-electricians.en";
import { seoForPaintingContractorsEn } from "./seo-for-painting-contractors.en";
import { seoForPlumbersEn } from "./seo-for-plumbers.en";
import { websiteForElectriciansEn } from "./website-for-electricians.en";
import { websiteForPlumbersEn } from "./website-for-plumbers.en";
import { dentalWebsiteDesignEn } from "./dental-website-design.en";
import { dentistSeoEn } from "./dentist-seo.en";
import { dentistSeoPl } from "./dentist-seo.pl";
import { dentistSeoRu } from "./dentist-seo.ru";
import { healthcareSeoEn } from "./healthcare-seo.en";
import { localSeoForDentistsEn } from "./local-seo-for-dentists.en";
import { medicalSeoEn } from "./medical-seo.en";
import { medicalSeoRu } from "./medical-seo.ru";
import { medicalWebsiteDesignEn } from "./medical-website-design.en";
import { medicalWebsiteDesignPl } from "./medical-website-design.pl";
import { medicalWebsiteDesignRu } from "./medical-website-design.ru";
import { seoForDoctorsEn } from "./seo-for-doctors.en";
import { veterinarySeoEn } from "./veterinary-seo.en";
import { veterinarySeoRu } from "./veterinary-seo.ru";
import { veterinaryWebsiteDesignEn } from "./veterinary-website-design.en";
import { hotelSeoEn } from "./hotel-seo.en";
import { hotelSeoPl } from "./hotel-seo.pl";
import { hotelSeoRu } from "./hotel-seo.ru";
import { b2bSeoEn } from "./b2b-seo.en";
import { b2bSeoRu } from "./b2b-seo.ru";
import { b2bWebsiteDesignEn } from "./b2b-website-design.en";
import { localSeoForSmallBusinessEn } from "./local-seo-for-small-business.en";
import { seoForStartupsEn } from "./seo-for-startups.en";
import { seoServicesForSmallBusinessEn } from "./seo-services-for-small-business.en";
import { seoServicesForSmallBusinessPl } from "./seo-services-for-small-business.pl";
import { seoServicesForSmallBusinessRu } from "./seo-services-for-small-business.ru";
import { smallBusinessWebsiteDesignEn } from "./small-business-website-design.en";
import { smallBusinessWebsiteDesignPl } from "./small-business-website-design.pl";
import { smallBusinessWebsiteDesignRu } from "./small-business-website-design.ru";
import { startupWebsiteDesignEn } from "./startup-website-design.en";
import { lawFirmWebsiteDesignEn } from "./law-firm-website-design.en";
import { localSeoForLawyersEn } from "./local-seo-for-lawyers.en";
import { personalInjurySeoEn } from "./personal-injury-seo.en";
import { seoForRealtorsEn } from "./seo-for-realtors.en";
import { seoForRealtorsPl } from "./seo-for-realtors.pl";
import { seoForRealtorsRu } from "./seo-for-realtors.ru";
import { realtorWebsiteDesignEn } from "./realtor-website-design.en";
import { realtorWebsiteDesignPl } from "./realtor-website-design.pl";
import { realtorWebsiteDesignRu } from "./realtor-website-design.ru";
import { financialAdvisorSeoEn } from "./financial-advisor-seo.en";
import { financialAdvisorSeoPl } from "./financial-advisor-seo.pl";
import { financialAdvisorSeoRu } from "./financial-advisor-seo.ru";
import { financialAdvisorWebsiteDesignEn } from "./financial-advisor-website-design.en";
import { financialAdvisorWebsiteDesignPl } from "./financial-advisor-website-design.pl";
import { financialAdvisorWebsiteDesignRu } from "./financial-advisor-website-design.ru";
import { insuranceAgencySeoEn } from "./insurance-agency-seo.en";
import { insuranceAgencySeoPl } from "./insurance-agency-seo.pl";
import { insuranceAgencySeoRu } from "./insurance-agency-seo.ru";
import { insuranceAgencyWebsiteDesignEn } from "./insurance-agency-website-design.en";
import { insuranceAgencyWebsiteDesignPl } from "./insurance-agency-website-design.pl";
import { insuranceAgencyWebsiteDesignRu } from "./insurance-agency-website-design.ru";
import { mortgageBrokerSeoEn } from "./mortgage-broker-seo.en";
import { mortgageBrokerSeoPl } from "./mortgage-broker-seo.pl";
import { mortgageBrokerSeoRu } from "./mortgage-broker-seo.ru";
import { pozycjonowanieStronPoznanPl } from "./pozycjonowanie-stron-poznan.pl";
import { tworzenieStronInternetowychPoznanPl } from "./tworzenie-stron-internetowych-poznan.pl";
import { pozycjonowanieStronTorunPl } from "./pozycjonowanie-stron-torun.pl";
import { tworzenieStronInternetowychTorunPl } from "./tworzenie-stron-internetowych-torun.pl";
import { pozycjonowanieStronWroclawPl } from "./pozycjonowanie-stron-wroclaw.pl";
import { tworzenieStronInternetowychWroclawPl } from "./tworzenie-stron-internetowych-wroclaw.pl";
import { pozycjonowanieStronKatowicePl } from "./pozycjonowanie-stron-katowice.pl";
import { tworzenieStronInternetowychKatowicePl } from "./tworzenie-stron-internetowych-katowice.pl";
import { pozycjonowanieStronKrakowPl } from "./pozycjonowanie-stron-krakow.pl";
import { tworzenieStronInternetowychKrakowPl } from "./tworzenie-stron-internetowych-krakow.pl";
import { pozycjonowanieStronRzeszowPl } from "./pozycjonowanie-stron-rzeszow.pl";
import { tworzenieStronInternetowychRzeszowPl } from "./tworzenie-stron-internetowych-rzeszow.pl";
import { pozycjonowanieStronSzczecinPl } from "./pozycjonowanie-stron-szczecin.pl";
import { tworzenieStronInternetowychSzczecinPl } from "./tworzenie-stron-internetowych-szczecin.pl";
import { pozycjonowanieStronLodzPl } from "./pozycjonowanie-stron-lodz.pl";
import { tworzenieStronInternetowychLodzPl } from "./tworzenie-stron-internetowych-lodz.pl";
import { pozycjonowanieStronBydgoszczPl } from "./pozycjonowanie-stron-bydgoszcz.pl";
import { tworzenieStronInternetowychBydgoszczPl } from "./tworzenie-stron-internetowych-bydgoszcz.pl";
import { pozycjonowanieStronLublinPl } from "./pozycjonowanie-stron-lublin.pl";
import { tworzenieStronInternetowychLublinPl } from "./tworzenie-stron-internetowych-lublin.pl";
import { pozycjonowanieStronOpolePl } from "./pozycjonowanie-stron-opole.pl";
import { tworzenieStronInternetowychOpolePl } from "./tworzenie-stron-internetowych-opole.pl";
import { pozycjonowanieStronCzestochowaPl } from "./pozycjonowanie-stron-czestochowa.pl";
import { tworzenieStronInternetowychCzestochowaPl } from "./tworzenie-stron-internetowych-czestochowa.pl";
import { pozycjonowanieStronGdanskPl } from "./pozycjonowanie-stron-gdansk.pl";
import { tworzenieStronInternetowychGdanskPl } from "./tworzenie-stron-internetowych-gdansk.pl";
import { pozycjonowanieStronRadomPl } from "./pozycjonowanie-stron-radom.pl";
import { tworzenieStronInternetowychRadomPl } from "./tworzenie-stron-internetowych-radom.pl";
import { pozycjonowanieStronBialystokPl } from "./pozycjonowanie-stron-bialystok.pl";
import { tworzenieStronInternetowychBialystokPl } from "./tworzenie-stron-internetowych-bialystok.pl";
import { architectureWebsiteDesignEn } from "./architecture-website-design.en";
import { itCompanyWebsiteDesignEn } from "./it-company-website-design.en";
import { photographerSeoPl } from "./photographer-seo.pl";
import { seoForArchitectsEn } from "./seo-for-architects.en";
import { seoForArchitectsPl } from "./seo-for-architects.pl";
import { seoForItCompaniesEn } from "./seo-for-it-companies.en";
import { charityWebsiteDesignEn } from "./charity-website-design.en";
import { manufacturingSeoEn } from "./manufacturing-seo.en";
import { manufacturingSeoPl } from "./manufacturing-seo.pl";
import { manufacturingSeoRu } from "./manufacturing-seo.ru";
import { manufacturingWebsiteDesignEn } from "./manufacturing-website-design.en";
import { nonprofitSeoEn } from "./nonprofit-seo.en";
import { nonprofitWebsiteDesignEn } from "./nonprofit-website-design.en";
import { nonprofitWebsiteDesignPl } from "./nonprofit-website-design.pl";
import { advocateSeoRu } from "./advocate-seo.ru";
import { hotelWebsiteDesignEn } from "./hotel-website-design.en";
import { vacationRentalWebsiteDesignEn } from "./vacation-rental-website-design.en";
import { adultWebsiteDesignEn } from "./adult-website-design.en";
import { adultWebsiteDesignPl } from "./adult-website-design.pl";
import { adultWebsiteDesignRu } from "./adult-website-design.ru";
import { adultSeoEn } from "./adult-seo.en";
import { adultSeoPl } from "./adult-seo.pl";
import { adultSeoRu } from "./adult-seo.ru";
import { websiteDesignForModelsEn } from "./website-design-for-models.en";
import { websiteDesignForModelsPl } from "./website-design-for-models.pl";
import { websiteDesignForModelsRu } from "./website-design-for-models.ru";
import { gymSeoEn } from "./gym-seo.en";
import { gymSeoPl } from "./gym-seo.pl";
import { gymSeoRu } from "./gym-seo.ru";
import { personalTrainerWebsiteDesignEn } from "./personal-trainer-website-design.en";
import { personalTrainerWebsiteDesignPl } from "./personal-trainer-website-design.pl";
import { personalTrainerWebsiteDesignRu } from "./personal-trainer-website-design.ru";
import { lifeCoachWebsiteDesignEn } from "./life-coach-website-design.en";
import { lifeCoachWebsiteDesignPl } from "./life-coach-website-design.pl";
import { lifeCoachWebsiteDesignRu } from "./life-coach-website-design.ru";
import { authorWebsiteDesignEn } from "./author-website-design.en";
import { authorWebsiteDesignPl } from "./author-website-design.pl";
import { authorWebsiteDesignRu } from "./author-website-design.ru";
import { artistWebsiteDesignEn } from "./artist-website-design.en";
import { artistWebsiteDesignPl } from "./artist-website-design.pl";
import { artistWebsiteDesignRu } from "./artist-website-design.ru";
import { bandWebsiteDesignEn } from "./band-website-design.en";
import { bandWebsiteDesignPl } from "./band-website-design.pl";
import { bandWebsiteDesignRu } from "./band-website-design.ru";
import { makeupArtistWebsiteDesignEn } from "./makeup-artist-website-design.en";
import { makeupArtistWebsiteDesignPl } from "./makeup-artist-website-design.pl";
import { makeupArtistWebsiteDesignRu } from "./makeup-artist-website-design.ru";
import { hairSalonWebsiteDesignEn } from "./hair-salon-website-design.en";
import { hairSalonWebsiteDesignPl } from "./hair-salon-website-design.pl";
import { hairSalonWebsiteDesignRu } from "./hair-salon-website-design.ru";
import { spaWebsiteDesignEn } from "./spa-website-design.en";
import { spaWebsiteDesignPl } from "./spa-website-design.pl";
import { spaWebsiteDesignRu } from "./spa-website-design.ru";
import { bedAndBreakfastWebsiteDesignEn } from "./bed-and-breakfast-website-design.en";
import { bedAndBreakfastWebsiteDesignPl } from "./bed-and-breakfast-website-design.pl";
import { bedAndBreakfastWebsiteDesignRu } from "./bed-and-breakfast-website-design.ru";
import { seoForTourOperatorsEn } from "./seo-for-tour-operators.en";
import { seoForTourOperatorsPl } from "./seo-for-tour-operators.pl";
import { seoForTourOperatorsRu } from "./seo-for-tour-operators.ru";
import { winerySeoEn } from "./winery-seo.en";
import { winerySeoPl } from "./winery-seo.pl";
import { winerySeoRu } from "./winery-seo.ru";
import { wineryWebsiteDesignEn } from "./winery-website-design.en";
import { wineryWebsiteDesignPl } from "./winery-website-design.pl";
import { wineryWebsiteDesignRu } from "./winery-website-design.ru";
import { carDealerSeoEn } from "./car-dealer-seo.en";
import { carDealerSeoPl } from "./car-dealer-seo.pl";
import { carDealerSeoRu } from "./car-dealer-seo.ru";
import { carDealerWebsiteDesignEn } from "./car-dealer-website-design.en";
import { carDealerWebsiteDesignPl } from "./car-dealer-website-design.pl";
import { carDealerWebsiteDesignRu } from "./car-dealer-website-design.ru";
import { carRentalSeoEn } from "./car-rental-seo.en";
import { carRentalSeoPl } from "./car-rental-seo.pl";
import { carRentalSeoRu } from "./car-rental-seo.ru";
import { autoDetailingWebsiteDesignEn } from "./auto-detailing-website-design.en";
import { autoDetailingWebsiteDesignPl } from "./auto-detailing-website-design.pl";
import { autoDetailingWebsiteDesignRu } from "./auto-detailing-website-design.ru";
import { floristSeoEn } from "./florist-seo.en";
import { floristSeoPl } from "./florist-seo.pl";
import { floristSeoRu } from "./florist-seo.ru";
import { floristWebsiteDesignEn } from "./florist-website-design.en";
import { floristWebsiteDesignPl } from "./florist-website-design.pl";
import { floristWebsiteDesignRu } from "./florist-website-design.ru";
import { fitnessStudioWebsiteEn } from "./fitness-studio-website.en";
import { fitnessStudioWebsitePl } from "./fitness-studio-website.pl";
import { fitnessStudioWebsiteRu } from "./fitness-studio-website.ru";
import { pestControlSeoEn } from "./pest-control-seo.en";
import { pestControlSeoPl } from "./pest-control-seo.pl";
import { pestControlSeoRu } from "./pest-control-seo.ru";
import { pestControlWebsiteDesignEn } from "./pest-control-website-design.en";
import { pestControlWebsiteDesignPl } from "./pest-control-website-design.pl";
import { pestControlWebsiteDesignRu } from "./pest-control-website-design.ru";
import { seoForMovingCompaniesEn } from "./seo-for-moving-companies.en";
import { seoForMovingCompaniesPl } from "./seo-for-moving-companies.pl";
import { seoForMovingCompaniesRu } from "./seo-for-moving-companies.ru";
import { seoForHomeBuildersEn } from "./seo-for-home-builders.en";
import { seoForHomeBuildersPl } from "./seo-for-home-builders.pl";
import { seoForHomeBuildersRu } from "./seo-for-home-builders.ru";
import { homeBuilderWebsiteDesignEn } from "./home-builder-website-design.en";
import { homeBuilderWebsiteDesignPl } from "./home-builder-website-design.pl";
import { homeBuilderWebsiteDesignRu } from "./home-builder-website-design.ru";
import { interiorDesignerWebsiteDesignEn } from "./interior-designer-website-design.en";
import { interiorDesignerWebsiteDesignPl } from "./interior-designer-website-design.pl";
import { interiorDesignerWebsiteDesignRu } from "./interior-designer-website-design.ru";
import { seoForInteriorDesignersEn } from "./seo-for-interior-designers.en";
import { seoForInteriorDesignersPl } from "./seo-for-interior-designers.pl";
import { seoForInteriorDesignersRu } from "./seo-for-interior-designers.ru";
import { handymanWebsiteDesignEn } from "./handyman-website-design.en";
import { handymanWebsiteDesignPl } from "./handyman-website-design.pl";
import { handymanWebsiteDesignRu } from "./handyman-website-design.ru";
import { locksmithSeoEn } from "./locksmith-seo.en";
import { locksmithSeoPl } from "./locksmith-seo.pl";
import { locksmithSeoRu } from "./locksmith-seo.ru";
import { carpetCleaningSeoEn } from "./carpet-cleaning-seo.en";
import { carpetCleaningSeoPl } from "./carpet-cleaning-seo.pl";
import { carpetCleaningSeoRu } from "./carpet-cleaning-seo.ru";
import { junkRemovalSeoEn } from "./junk-removal-seo.en";
import { junkRemovalSeoPl } from "./junk-removal-seo.pl";
import { junkRemovalSeoRu } from "./junk-removal-seo.ru";
import { seoForFlooringCompaniesEn } from "./seo-for-flooring-companies.en";
import { seoForFlooringCompaniesPl } from "./seo-for-flooring-companies.pl";
import { seoForFlooringCompaniesRu } from "./seo-for-flooring-companies.ru";
import { treeServiceSeoEn } from "./tree-service-seo.en";
import { treeServiceSeoPl } from "./tree-service-seo.pl";
import { treeServiceSeoRu } from "./tree-service-seo.ru";
import { pressureWashingWebsiteDesignEn } from "./pressure-washing-website-design.en";
import { pressureWashingWebsiteDesignPl } from "./pressure-washing-website-design.pl";
import { pressureWashingWebsiteDesignRu } from "./pressure-washing-website-design.ru";
import { garageDoorSeoEn } from "./garage-door-seo.en";
import { garageDoorSeoPl } from "./garage-door-seo.pl";
import { garageDoorSeoRu } from "./garage-door-seo.ru";
import { restorationSeoEn } from "./restoration-seo.en";
import { restorationSeoPl } from "./restoration-seo.pl";
import { restorationSeoRu } from "./restoration-seo.ru";
import { seoForHomeInspectorsEn } from "./seo-for-home-inspectors.en";
import { seoForHomeInspectorsPl } from "./seo-for-home-inspectors.pl";
import { seoForHomeInspectorsRu } from "./seo-for-home-inspectors.ru";
import { applianceRepairSeoEn } from "./appliance-repair-seo.en";
import { applianceRepairSeoPl } from "./appliance-repair-seo.pl";
import { applianceRepairSeoRu } from "./appliance-repair-seo.ru";
import { seoForTherapistsEn } from "./seo-for-therapists.en";
import { seoForTherapistsPl } from "./seo-for-therapists.pl";
import { seoForTherapistsRu } from "./seo-for-therapists.ru";
import { seoForChiropractorsEn } from "./seo-for-chiropractors.en";
import { seoForChiropractorsPl } from "./seo-for-chiropractors.pl";
import { seoForChiropractorsRu } from "./seo-for-chiropractors.ru";
import { chiropractorWebsiteDesignEn } from "./chiropractor-website-design.en";
import { chiropractorWebsiteDesignPl } from "./chiropractor-website-design.pl";
import { chiropractorWebsiteDesignRu } from "./chiropractor-website-design.ru";
import { seoForPlasticSurgeonsEn } from "./seo-for-plastic-surgeons.en";
import { seoForPlasticSurgeonsPl } from "./seo-for-plastic-surgeons.pl";
import { seoForPlasticSurgeonsRu } from "./seo-for-plastic-surgeons.ru";
import { plasticSurgeonWebsiteDesignEn } from "./plastic-surgeon-website-design.en";
import { plasticSurgeonWebsiteDesignPl } from "./plastic-surgeon-website-design.pl";
import { plasticSurgeonWebsiteDesignRu } from "./plastic-surgeon-website-design.ru";
import { medSpaSeoEn } from "./med-spa-seo.en";
import { medSpaSeoPl } from "./med-spa-seo.pl";
import { medSpaSeoRu } from "./med-spa-seo.ru";
import { medSpaWebsiteDesignEn } from "./med-spa-website-design.en";
import { medSpaWebsiteDesignPl } from "./med-spa-website-design.pl";
import { medSpaWebsiteDesignRu } from "./med-spa-website-design.ru";
import { seoForDermatologistsEn } from "./seo-for-dermatologists.en";
import { seoForDermatologistsPl } from "./seo-for-dermatologists.pl";
import { seoForDermatologistsRu } from "./seo-for-dermatologists.ru";
import { seoForOrthodontistsEn } from "./seo-for-orthodontists.en";
import { seoForOrthodontistsPl } from "./seo-for-orthodontists.pl";
import { seoForOrthodontistsRu } from "./seo-for-orthodontists.ru";
import { orthodontistWebsiteDesignEn } from "./orthodontist-website-design.en";
import { orthodontistWebsiteDesignPl } from "./orthodontist-website-design.pl";
import { orthodontistWebsiteDesignRu } from "./orthodontist-website-design.ru";
import { optometrySeoEn } from "./optometry-seo.en";
import { optometrySeoPl } from "./optometry-seo.pl";
import { optometrySeoRu } from "./optometry-seo.ru";
import { optometristWebsiteDesignEn } from "./optometrist-website-design.en";
import { optometristWebsiteDesignPl } from "./optometrist-website-design.pl";
import { optometristWebsiteDesignRu } from "./optometrist-website-design.ru";
import { seniorLivingSeoEn } from "./senior-living-seo.en";
import { seniorLivingSeoPl } from "./senior-living-seo.pl";
import { seniorLivingSeoRu } from "./senior-living-seo.ru";
import { seniorLivingWebsiteDesignEn } from "./senior-living-website-design.en";
import { seniorLivingWebsiteDesignPl } from "./senior-living-website-design.pl";
import { seniorLivingWebsiteDesignRu } from "./senior-living-website-design.ru";
import { websiteForPsychologistsTherapistsEn } from "./website-for-psychologists-therapists.en";
import { websiteForPsychologistsTherapistsPl } from "./website-for-psychologists-therapists.pl";
import { websiteForPsychologistsTherapistsRu } from "./website-for-psychologists-therapists.ru";
import { seoConsultantEn } from "./seo-consultant.en";
import { seoConsultantPl } from "./seo-consultant.pl";
import { seoConsultantRu } from "./seo-consultant.ru";
import { seoConsultationPl } from "./seo-consultation.pl";
import { seoConsultationRu } from "./seo-consultation.ru";
import { conversionRateOptimizationServicesEn } from "./conversion-rate-optimization-services.en";
import { conversionRateOptimizationServicesPl } from "./conversion-rate-optimization-services.pl";
import { conversionRateOptimizationServicesRu } from "./conversion-rate-optimization-services.ru";
import { wordpressDevelopmentServicesEn } from "./wordpress-development-services.en";
import { wordpressDevelopmentServicesPl } from "./wordpress-development-services.pl";
import { wordpressDevelopmentServicesRu } from "./wordpress-development-services.ru";
import { nextjsDevelopmentServicesEn } from "./nextjs-development-services.en";
import { nextjsDevelopmentServicesPl } from "./nextjs-development-services.pl";
import { nextjsDevelopmentServicesRu } from "./nextjs-development-services.ru";
import { businessCardWebsitePl } from "./business-card-website.pl";
import { businessCardWebsiteRu } from "./business-card-website.ru";
import { websitePromotionRu } from "./website-promotion.ru";
import { cafeWebsiteEn } from "./cafe-website.en";
import { cafeWebsitePl } from "./cafe-website.pl";
import { cafeWebsiteRu } from "./cafe-website.ru";
import { cafeWebsiteDesignEn } from "./cafe-website-design.en";
import { cafeSeoEn } from "./cafe-seo.en";
import { cafeSeoPl } from "./cafe-seo.pl";
import { cafeSeoRu } from "./cafe-seo.ru";
import { bakeryWebsiteDesignEn } from "./bakery-website-design.en";
import { bakeryWebsiteDesignPl } from "./bakery-website-design.pl";
import { bakeryWebsiteDesignRu } from "./bakery-website-design.ru";
import { bakerySeoEn } from "./bakery-seo.en";
import { bakerySeoPl } from "./bakery-seo.pl";
import { bakerySeoRu } from "./bakery-seo.ru";
import { cateringSeoEn } from "./catering-seo.en";
import { cateringSeoPl } from "./catering-seo.pl";
import { cateringSeoRu } from "./catering-seo.ru";
import { cateringWebsiteDesignEn } from "./catering-website-design.en";
import { cateringWebsiteDesignPl } from "./catering-website-design.pl";
import { cateringWebsiteDesignRu } from "./catering-website-design.ru";
import { foodTruckWebsiteDesignEn } from "./food-truck-website-design.en";
import { foodTruckWebsiteDesignPl } from "./food-truck-website-design.pl";
import { foodTruckWebsiteDesignRu } from "./food-truck-website-design.ru";
import { seoForRealEstateDevelopersEn } from "./seo-for-real-estate-developers.en";
import { seoForRealEstateDevelopersPl } from "./seo-for-real-estate-developers.pl";
import { seoForRealEstateDevelopersRu } from "./seo-for-real-estate-developers.ru";

const FIXTURES: any[] = [restaurantWebsiteDesignEn, restaurantWebsiteDesignRu, restaurantSeoEn, restaurantSeoPl, restaurantSeoRu, constructionWebsiteDesignEn, constructionWebsiteDesignRu, constructionSeoEn, constructionSeoRu, constructionSeoPl, constructionCompanyWebsiteEn, constructionCompanyWebsitePl, constructionCompanyWebsiteRu, contractorWebsiteDesignEn, websiteForContractorsEn, websiteForContractorsRu, seoForContractorsEn, localSeoForContractorsEn, aiSeoServicesEn, aiSeoServicesPl, aiSeoServicesRu, aiSeoConsultantEn, aiSeoConsultantPl, aiSeoConsultantRu, chatgptSeoServicesEn, chatgptSeoServicesPl, chatgptSeoServicesRu, llmSeoServicesEn, llmSeoServicesPl, llmSeoServicesRu, electricianWebsiteDesignEn, hvacSeoEn, hvacWebsiteDesignEn, hvacWebsitesEn, landscapingSeoEn, landscapingWebsiteDesignEn, lawnCareWebsiteEn, localSeoForPlumbersEn, plumbingWebsiteDesignEn, roofingSeoEn, roofingWebsiteDesignEn, roofingWebsitesEn, seoForElectriciansEn, seoForPaintingContractorsEn, seoForPlumbersEn, websiteForElectriciansEn, websiteForPlumbersEn, dentalWebsiteDesignEn, dentistSeoEn, dentistSeoPl, dentistSeoRu, healthcareSeoEn, localSeoForDentistsEn, medicalSeoEn, medicalSeoRu, medicalWebsiteDesignEn, medicalWebsiteDesignPl, medicalWebsiteDesignRu, seoForDoctorsEn, veterinarySeoEn, veterinarySeoRu, veterinaryWebsiteDesignEn, hotelSeoEn, hotelSeoPl, hotelSeoRu, hotelWebsiteDesignEn, vacationRentalWebsiteDesignEn, b2bSeoEn, b2bSeoRu, b2bWebsiteDesignEn, localSeoForSmallBusinessEn, seoForStartupsEn, seoServicesForSmallBusinessEn, seoServicesForSmallBusinessPl, seoServicesForSmallBusinessRu, smallBusinessWebsiteDesignEn, smallBusinessWebsiteDesignPl, smallBusinessWebsiteDesignRu, startupWebsiteDesignEn, lawFirmWebsiteDesignEn, localSeoForLawyersEn, personalInjurySeoEn, advocateSeoRu, charityWebsiteDesignEn, manufacturingSeoEn, manufacturingSeoPl, manufacturingSeoRu, manufacturingWebsiteDesignEn, nonprofitSeoEn, nonprofitWebsiteDesignEn, nonprofitWebsiteDesignPl, architectureWebsiteDesignEn, itCompanyWebsiteDesignEn, photographerSeoPl, seoForArchitectsEn, seoForArchitectsPl, seoForItCompaniesEn, pozycjonowanieStronPoznanPl, tworzenieStronInternetowychPoznanPl, pozycjonowanieStronTorunPl, tworzenieStronInternetowychTorunPl, pozycjonowanieStronWroclawPl, tworzenieStronInternetowychWroclawPl, pozycjonowanieStronKatowicePl, tworzenieStronInternetowychKatowicePl, pozycjonowanieStronKrakowPl, tworzenieStronInternetowychKrakowPl, pozycjonowanieStronRzeszowPl, tworzenieStronInternetowychRzeszowPl, pozycjonowanieStronSzczecinPl, tworzenieStronInternetowychSzczecinPl, pozycjonowanieStronLodzPl, tworzenieStronInternetowychLodzPl, pozycjonowanieStronBydgoszczPl, tworzenieStronInternetowychBydgoszczPl, pozycjonowanieStronLublinPl, tworzenieStronInternetowychLublinPl, pozycjonowanieStronOpolePl, tworzenieStronInternetowychOpolePl, pozycjonowanieStronCzestochowaPl, tworzenieStronInternetowychCzestochowaPl, pozycjonowanieStronGdanskPl, tworzenieStronInternetowychGdanskPl, pozycjonowanieStronRadomPl, tworzenieStronInternetowychRadomPl, pozycjonowanieStronBialystokPl, tworzenieStronInternetowychBialystokPl, seoForRealtorsEn, seoForRealtorsPl, seoForRealtorsRu, realtorWebsiteDesignEn, realtorWebsiteDesignPl, realtorWebsiteDesignRu, financialAdvisorSeoEn, financialAdvisorSeoPl, financialAdvisorSeoRu, financialAdvisorWebsiteDesignEn, financialAdvisorWebsiteDesignPl, financialAdvisorWebsiteDesignRu, insuranceAgencySeoEn, insuranceAgencySeoPl, insuranceAgencySeoRu, insuranceAgencyWebsiteDesignEn, insuranceAgencyWebsiteDesignPl, insuranceAgencyWebsiteDesignRu, mortgageBrokerSeoEn, mortgageBrokerSeoPl, mortgageBrokerSeoRu, seoForTherapistsEn, seoForTherapistsPl, seoForTherapistsRu, seoForChiropractorsEn, seoForChiropractorsPl, seoForChiropractorsRu, chiropractorWebsiteDesignEn, chiropractorWebsiteDesignPl, chiropractorWebsiteDesignRu, seoForPlasticSurgeonsEn, seoForPlasticSurgeonsPl, seoForPlasticSurgeonsRu, plasticSurgeonWebsiteDesignEn, plasticSurgeonWebsiteDesignPl, plasticSurgeonWebsiteDesignRu, medSpaSeoEn, medSpaSeoPl, medSpaSeoRu, medSpaWebsiteDesignEn, medSpaWebsiteDesignPl, medSpaWebsiteDesignRu, seoForDermatologistsEn, seoForDermatologistsPl, seoForDermatologistsRu, seoForOrthodontistsEn, seoForOrthodontistsPl, seoForOrthodontistsRu, orthodontistWebsiteDesignEn, orthodontistWebsiteDesignPl, orthodontistWebsiteDesignRu, optometrySeoEn, optometrySeoPl, optometrySeoRu, optometristWebsiteDesignEn, optometristWebsiteDesignPl, optometristWebsiteDesignRu, seniorLivingSeoEn, seniorLivingSeoPl, seniorLivingSeoRu, seniorLivingWebsiteDesignEn, seniorLivingWebsiteDesignPl, seniorLivingWebsiteDesignRu, websiteForPsychologistsTherapistsEn, websiteForPsychologistsTherapistsPl, websiteForPsychologistsTherapistsRu, pestControlSeoEn, pestControlSeoPl, pestControlSeoRu, pestControlWebsiteDesignEn, pestControlWebsiteDesignPl, pestControlWebsiteDesignRu, seoForMovingCompaniesEn, seoForMovingCompaniesPl, seoForMovingCompaniesRu, seoForHomeBuildersEn, seoForHomeBuildersPl, seoForHomeBuildersRu, homeBuilderWebsiteDesignEn, homeBuilderWebsiteDesignPl, homeBuilderWebsiteDesignRu, interiorDesignerWebsiteDesignEn, interiorDesignerWebsiteDesignPl, interiorDesignerWebsiteDesignRu, seoForInteriorDesignersEn, seoForInteriorDesignersPl, seoForInteriorDesignersRu, handymanWebsiteDesignEn, handymanWebsiteDesignPl, handymanWebsiteDesignRu, locksmithSeoEn, locksmithSeoPl, locksmithSeoRu, carpetCleaningSeoEn, carpetCleaningSeoPl, carpetCleaningSeoRu, junkRemovalSeoEn, junkRemovalSeoPl, junkRemovalSeoRu, seoForFlooringCompaniesEn, seoForFlooringCompaniesPl, seoForFlooringCompaniesRu, treeServiceSeoEn, treeServiceSeoPl, treeServiceSeoRu, pressureWashingWebsiteDesignEn, pressureWashingWebsiteDesignPl, pressureWashingWebsiteDesignRu, garageDoorSeoEn, garageDoorSeoPl, garageDoorSeoRu, restorationSeoEn, restorationSeoPl, restorationSeoRu, seoForHomeInspectorsEn, seoForHomeInspectorsPl, seoForHomeInspectorsRu, applianceRepairSeoEn, applianceRepairSeoPl, applianceRepairSeoRu, gymSeoEn, gymSeoPl, gymSeoRu, personalTrainerWebsiteDesignEn, personalTrainerWebsiteDesignPl, personalTrainerWebsiteDesignRu, lifeCoachWebsiteDesignEn, lifeCoachWebsiteDesignPl, lifeCoachWebsiteDesignRu, authorWebsiteDesignEn, authorWebsiteDesignPl, authorWebsiteDesignRu, artistWebsiteDesignEn, artistWebsiteDesignPl, artistWebsiteDesignRu, bandWebsiteDesignEn, bandWebsiteDesignPl, bandWebsiteDesignRu, makeupArtistWebsiteDesignEn, makeupArtistWebsiteDesignPl, makeupArtistWebsiteDesignRu, hairSalonWebsiteDesignEn, hairSalonWebsiteDesignPl, hairSalonWebsiteDesignRu, spaWebsiteDesignEn, spaWebsiteDesignPl, spaWebsiteDesignRu, bedAndBreakfastWebsiteDesignEn, bedAndBreakfastWebsiteDesignPl, bedAndBreakfastWebsiteDesignRu, seoForTourOperatorsEn, seoForTourOperatorsPl, seoForTourOperatorsRu, winerySeoEn, winerySeoPl, winerySeoRu, wineryWebsiteDesignEn, wineryWebsiteDesignPl, wineryWebsiteDesignRu, carDealerSeoEn, carDealerSeoPl, carDealerSeoRu, carDealerWebsiteDesignEn, carDealerWebsiteDesignPl, carDealerWebsiteDesignRu, carRentalSeoEn, carRentalSeoPl, carRentalSeoRu, autoDetailingWebsiteDesignEn, autoDetailingWebsiteDesignPl, autoDetailingWebsiteDesignRu, floristSeoEn, floristSeoPl, floristSeoRu, floristWebsiteDesignEn, floristWebsiteDesignPl, floristWebsiteDesignRu, fitnessStudioWebsiteEn, fitnessStudioWebsitePl, fitnessStudioWebsiteRu, adultWebsiteDesignEn, adultWebsiteDesignPl, adultWebsiteDesignRu, adultSeoEn, adultSeoPl, adultSeoRu, websiteDesignForModelsEn, websiteDesignForModelsPl, websiteDesignForModelsRu, seoConsultantEn, seoConsultantPl, seoConsultantRu, seoConsultationPl, seoConsultationRu, conversionRateOptimizationServicesEn, conversionRateOptimizationServicesPl, conversionRateOptimizationServicesRu, wordpressDevelopmentServicesEn, wordpressDevelopmentServicesPl, wordpressDevelopmentServicesRu, nextjsDevelopmentServicesEn, nextjsDevelopmentServicesPl, nextjsDevelopmentServicesRu, businessCardWebsitePl, businessCardWebsiteRu, websitePromotionRu, cafeWebsiteEn, cafeWebsitePl, cafeWebsiteRu, cafeWebsiteDesignEn, cafeSeoEn, cafeSeoPl, cafeSeoRu, bakeryWebsiteDesignEn, bakeryWebsiteDesignPl, bakeryWebsiteDesignRu, bakerySeoEn, bakerySeoPl, bakerySeoRu, cateringSeoEn, cateringSeoPl, cateringSeoRu, cateringWebsiteDesignEn, cateringWebsiteDesignPl, cateringWebsiteDesignRu, foodTruckWebsiteDesignEn, foodTruckWebsiteDesignPl, foodTruckWebsiteDesignRu, seoForRealEstateDevelopersEn, seoForRealEstateDevelopersPl, seoForRealEstateDevelopersRu];

// Rewrites of pages that already exist in Sanity (scripts/replace-landing.cjs).
// The Sanity page wins on its own address, so on localhost these are served at
// <address>--preview. Remove an entry once the rewrite is applied.
const PREVIEW_FIXTURES: any[] = [];
FIXTURES.push(...PREVIEW_FIXTURES.map((fx) => ({ ...fx, slug: `${fx.slug}--preview` })));

const isDev = process.env.NODE_ENV !== "production";

/** Same id the create script will give the document, so the A/B form arm on
 *  localhost is the arm the live page will get. */
export const fixtureDocId = (fx: any) => {
  const base = `singlepage-${fx.group ?? fx.slug}`;
  return fx.lang === "en" ? base : `${base}.${fx.lang}`;
};

export function devFixtureParams(): { lang: string; slug: string[] }[] {
  if (!isDev) return [];
  return FIXTURES.map((fx) => ({ lang: fx.lang, slug: [...(fx.parentPath ?? []), fx.slug] }));
}

/** Real path of a fixture page: a nested one (fx.parentPath, e.g. ["services"])
 *  lives under its parent, like the service pages in Sanity. */
export function devFixturePath(lang: string, slug: string): string[] | null {
  if (!isDev) return null;
  const fx = FIXTURES.find((f) => f.lang === lang && f.slug === slug);
  return fx ? [...(fx.parentPath ?? []), fx.slug] : null;
}

/** The fixture shaped exactly like getSinglePageByLang's GROQ result. */
export async function getDevFixturePage(lang: string, slug: string) {
  if (!isDev) return null;
  const fx = FIXTURES.find((f) => f.lang === lang && f.slug === slug);
  if (!fx) return null;

  // Picks are always the EN slugs of portfolio cases; the PL/RU card is the
  // EN case's translation (translation.metadata), not a guessed slug.
  const pickSlugs: string[] = fx.contentBlocks
    .filter((b: any) => b._type === "portfolioPickBlock")
    .flatMap((b: any) => b.picks);
  let projects: any[] = [];
  if (pickSlugs.length) {
    const ids: { s: string; id: string | null }[] = await client.fetch(
      groq`*[_type == "portfolio" && language == "en" && !(_id in path("drafts.**")) && slug.en.current in $slugs]{
        "s": slug.en.current,
        "id": select(
          $lang == "en" => _id,
          *[_type == "translation.metadata" && references(^._id)][0].translations[_key == $lang][0].value._ref
        )
      }`,
      { lang, slugs: pickSlugs },
    );
    const docs: any[] = await client.fetch(
      groq`*[_id in $ids]{
        _id, title, slug, language, previewImage, cardTags,
        keyFeatures{ industry, services[]->{ _id, title, slug } }
      }`,
      { ids: ids.map((x) => x.id).filter(Boolean) },
    );
    projects = ids.map((x) => ({ ...(docs.find((d) => d._id === x.id) ?? {}), s: x.s })).filter((p) => p._id);
  }
  const formDocument = await getFormStandardDocumentByLang(lang);
  const parentPage = fx.parentPath
    ? await client.fetch(
        groq`*[_type == "singlepage" && language == $lang && slug[$lang].current == $s && !(_id in path("drafts.**"))][0]{ title, slug }`,
        { lang, s: fx.parentPath[fx.parentPath.length - 1] },
      )
    : null;

  const contentBlocks = fx.contentBlocks.map((b: any) => {
    if (b._type === "portfolioPickBlock") {
      const { picks, ...rest } = b;
      return { ...rest, items: picks.map((s: string) => projects.find((pr) => pr.s === s) ?? null).filter(Boolean) };
    }
    if (b._type === "quoteFormBlock") return { ...b, form: formDocument };
    return b;
  });

  return {
    _id: fixtureDocId(fx),
    title: fx.title,
    heading: fx.heading,
    slug: { _type: "localizedSlug", [lang]: { _type: "slug", current: fx.slug } },
    seo: fx.seo,
    excerpt: fx.excerpt,
    stickyCta: fx.stickyCta,
    heroLayout: fx.heroLayout,
    heroChips: fx.heroChips,
    heroPhonePoints: fx.heroPhonePoints,
    heroVisual: fx.heroVisual,
    heroPhoto: fx.heroPhoto,
    pageType: fx.pageType ?? "page",
    ...(parentPage ? { parentPage } : {}),
    offers: fx.offers ?? [],
    contentBlocks,
    _translations: [],
    childrenServices: [],
  };
}
