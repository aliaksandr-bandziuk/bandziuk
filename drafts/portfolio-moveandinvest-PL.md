═══════════════════════════════════════════════════════════════
PORTFOLIO: moveandinvest.com — PL
═══════════════════════════════════════════════════════════════

[SLUG]
przewodnik-po-rezydencji-za-inwestycje-ze-zrodlami

[TITLE]
Przewodnik po rezydencji za inwestycje w pięciu jurysdykcjach

[FULL TITLE — H1]
Budowa trójjęzycznego przewodnika po rezydencji za inwestycje, w którym każda liczba jest sprawdzona w przepisie

[EXCERPT] (≤200 znaków)
Projekt własny: Next.js, Sanity, trzy języki i jedna zasada — liczba nie trafia na stronę, dopóki nie przeczytam aktu, który ją ustanawia.

[SEO]
metaTitle: Case study: przewodnik po rezydencji za inwestycje
metaDescription: Jak zbudowałem trójjęzyczny serwis o rezydencji za inwestycje: strona źródeł, dziennik zmian prawnych i kalkulator realnego kosztu wejścia.

[KEY FEATURES]
clientName: Projekt własny
industry: Relokacja i rezydencja za inwestycje
website: https://www.moveandinvest.com/ (typ — link, etykieta moveandinvest.com, koniecznie index, follow)
services: Tworzenie stron internetowych, SEO

[PREVIEW IMAGE]
alt: "Strona główna przewodnika moveandinvest.com z nagłówkiem o realnym koszcie przeprowadzki"

[PROBLEM]
Niemal wszystko, co napisano o rezydencji za inwestycje, piszą ci, którzy tę usługę sprzedają. Dlatego po rynku krążą liczby, których w przepisach dawno nie ma: progi zniesione lata temu, terminy zmienione ostatnią wiosną i całe ścieżki zamknięte wyrokiem sądu, a mimo to wystawione z cenami. Kto przeczyta pięć stron po kolei, dostaje pięć różnych odpowiedzi i ani jednego odnośnika do przepisu.

Potrzebowałem własnego aktywa leadowego w tej niszy, a wchodzenie w nią zwykłą drogą — treścią powtarzającą to samo — nie miało sensu: domena nie ma ani wieku, ani linków, ani budżetu na jedno i drugie. Jedyne wolne miejsce na tym rynku to dokładność. Stąd zasada, z której wyrosło wszystko pozostałe: liczba nie zostaje opublikowana, dopóki nie przeczytam aktu, który ją ustanawia, a obok niej stoi data tego odczytu.

[TASK]
- Zbudować przewodnik po pięciu jurysdykcjach — Portugalia, Grecja, Malta, ZEA i Cypr — w trzech językach, gdzie każde twierdzenie liczbowe prowadzi do źródła pierwotnego
- Sprawić, żeby zasada dokładności trzymała się technicznie, a nie na dyscyplinie autora
- Zbudować strony, których w niszy nie ma w ogóle, a nie kolejną wersję tych, które już są
- Zmieścić się bez płatnych krojów, zdjęć stockowych i budżetu na ilustracje
- Zostawić kwalifikację zgłoszenia wewnątrz serwisu, zamiast oddawać ją cudzemu formularzowi
- Doprowadzić front do stanu, w którym szybkość i semantyka nie przeszkadzają ani wyszukiwarkom, ani agentom

[RESULTS]
- PageSpeed na produkcyjnym buildzie: wydajność 95, dostępność 97, sprawdzone metody 100, SEO 100
- Test przeglądania agentowego zaliczony w całości, 2 z 2 — strukturę stron czytają asystenci, nie tylko przeglądarka
- W pierwszych dwóch tygodniach Search Console pokazuje setki zapytań, na które serwis już się wyświetla
- Pierwsza merytoryczna wizyta przyszła z ChatGPT — na stronę, której Google jeszcze nie odwiedziło
- Dwie strony, których nie ma żadna z dwudziestu przeanalizowanych domen: przekrojowa strona źródeł z werdyktami i dziennik zmian prawnych z datami wejścia w życie i numerami aktów
- Dziennik zmian jest wystawiony jako dane maszynowo czytelne pod stałym adresem — do swobodnego użytku z podaniem źródła
- Analiza rynku dała cztery sprawdzalne ustalenia i każde stało się treścią osobnej strony: zniesiona ścieżka maltańska, niezniesiony wymóg portugalski, błędnie datowana ścieżka grecka i przepis, na którym naprawdę stoi cypryjski pobyt stały
- Cały serwis działa bez ani jednego płatnego kroju, zdjęcia stockowego czy kupionej ilustracji

[WORK DONE]
- Next.js na App Routerze z Reactem i TypeScriptem, Sanity jako CMS, wdrożenie na Vercelu
- Wielojęzyczność na własnych adresach dla każdego języka, a nie prefiksach doklejonych do angielskich URL-i
- Strona źródeł: przy każdym twierdzeniu źródło pierwotne, werdykt i data odczytu; każdy odnośnik oznaczony jako publikacja oficjalna albo jako reprodukcja
- Dziennik zmian prawnych z filtrem po jurysdykcjach, kotwicą przy każdym wpisie i eksportem maszynowo czytelnym
- Kalkulator kosztu, który liczy wiersz po wierszu to, co płaci się ponad próg, z podstawą i odnośnikiem do źródła przy każdej pozycji
- Dobór ścieżki na trzy pytania, w którym budżet sprawdza się względem realnej sumy, a nie reklamowego progu
- Schematy generowane kodem i wysyłane na stronę jako samowystarczalne pliki z osadzonymi krojami
- System projektowy na zmierzonych parach kolorystycznych: współczynnik kontrastu zapisany obok wartości, zmiana koloru bez przeliczenia zabroniona
- Formularz zgłoszenia kwalifikujący wewnątrz serwisu: jurysdykcja, budżet, termin, cel
- Kontrole na buildzie: zepsuty odnośnik do kotwicy na stronie źródeł przerywa publikację, osobna kontrola nie pozwala dwóm stronom celować w to samo zapytanie, a liczba nie zmieni się w tekście bez zmiany pliku weryfikacji
- Wersje rosyjska i polska napisane pod własny popyt każdego języka, a nie przetłumaczone z angielskiej

[SCREENSHOTS]

1. title: "Tabela porównawcza pięciu jurysdykcji"
   alt: "Tabela porównania programów rezydencji za inwestycje w pięciu krajach z progami i reżimami podatkowymi"
   caption: Te same cztery kolumny dla wszystkich pięciu krajów. Przy Cyprze stoją kreski — źródła pierwotne się nie otwierają, a nie publikujemy tego, czego nie sprawdziliśmy.

2. title: "Reklamowany próg a realny pierwszy rok"
   alt: "Paski porównujące reklamowany próg z realnym kosztem pierwszego roku w czterech jurysdykcjach"
   caption: Próg publikują wszyscy. Tego, co płaci się ponad niego — podatków, opłat, wkładów i pierwszego przedłużenia — prawie nikt.

3. title: "Karty jurysdykcji"
   alt: "Pięć kart krajów z konturami i najważniejszymi liczbami każdego programu"
   caption: Cypr jest szary i podpisany słowem "niesprawdzone" — status niesie słowo, nie sam kolor.

4. title: "Dobór ścieżki na trzy pytania"
   alt: "Blok doboru ścieżki z trzema pytaniami i złożonym podsumowaniem pasującej jurysdykcji"
   caption: Budżet sprawdza się względem realnej sumy, a nie reklamowego progu, i nic nigdzie nie idzie, dopóki czytelnik sam nie naciśnie przycisku.

5. title: "Koszt ponad próg, wiersz po wierszu"
   alt: "Rozbicie kosztu wejścia do programu maltańskiego na pozycje z podstawą i odnośnikiem do źródła"
   caption: Każda pozycja ma swoją podstawę, stawkę i odnośnik do aktu, który ją ustanawia.

6. title: "Kalkulator kosztu wejścia"
   alt: "Kalkulator z polem budżetu porównujący cztery programy pod kątem pokrycia"
   caption: Czytelnik podaje własną kwotę i widzi, w co ona wchodzi, w co nie wchodzi i o ile brakuje.

7. title: "Strona źródeł z kolumną werdyktu"
   alt: "Strona źródeł z werdyktem przy każdym twierdzeniu i oznaczeniami publikacji oficjalnej"
   caption: Obok twierdzeń rynkowych stoją tu dwa własne błędy projektu — strona, która rozlicza cudze, a milczy o swoich, nie działa jako argument.

8. title: "Dziennik zmian prawnych"
   alt: "Dziennik zmian w przepisach z datami wejścia w życie, numerami aktów i filtrem po jurysdykcjach"
   caption: Co się zmieniło, od kiedy, jakim aktem i która liczba serwisu przesunęła się razem z tym.

9. title: "Schemat ścieżek, które nadal istnieją"
   alt: "Schemat portugalskich ścieżek pobytowych, gdzie zniesiona ścieżka jest przekreślona wewnątrz tabeli"
   caption: Zniesiona ścieżka nie została usunięta z tabeli, tylko przekreślona — żeby czytelnik, który przyszedł z reklamy, znalazł ją i zobaczył, że jej nie ma.

10. title: "Rosyjska wersja przewodnika"
    alt: "Ta sama tabela porównawcza po rosyjsku"
    caption: Przetłumaczony jest cały przewodnik razem ze sformułowaniami opisującymi metodę, a nie etykiety w menu.

11. (idzie do previewImage, nie trafia do slidera)
    title: "Pierwszy ekran przewodnika"
    alt: "Pierwszy ekran moveandinvest.com z nagłówkiem i spisem treści strony"
    caption: Biała strona przeciw czarnej płaszczyźnie — cały zabieg, na którym stoi wygląd serwisu, bez ani jednego płatnego obrazka.

12. title: "Wyniki PageSpeed i test przeglądania agentowego"
    alt: "Raport PageSpeed z wynikami 95, 97, 100, 100 i w pełni zaliczonym testem przeglądania agentowego"
    caption: Wydajność 95, dostępność 97, sprawdzone metody 100, SEO 100 i pełne zaliczenie testu przeglądania agentowego.

[MAIN CONTENT]

### Dlaczego przewodnik po rezydencji za inwestycje nie może opublikować liczby przed przeczytaniem przepisu

Zasada brzmi nudno: liczba nie trafia na stronę, dopóki nie przeczytam aktu, który ją ustanawia. Jej praktyczna konsekwencja jest niewygodna. Tam, gdzie źródło pierwotne jest niedostępne, nie publikuje się nic — i strona mówi to wprost.

Właśnie dlatego Cypr stoi w tabeli porównawczej z kreskami. Portal rządowy odmawia odpowiedzi, w innym urzędzie wygasł certyfikat, w trzecim dokument jest zamknięty przed indeksowaniem. Próg pobytu stałego opublikowany bez przeczytania ustawy to dokładnie to twierdzenie, które rozchodzi się po internecie i którego potem już się nie odwołuje. Kreska w tabeli kosztuje mniej niż wiersz, za który nie ma czym odpowiedzieć.

Co to daje na wyjściu: progi, terminy i kwoty na stronie są te, które obowiązują dziś, a nie te, które rozeszły się po rynku. Grecki próg zmienił się we wrześniu 2024, maltański w styczniu 2025, portugalski termin do obywatelstwa w maju 2026 — a na większości stron branżowych nadal stoją poprzednie wartości. Sprawdzenie w źródle pierwotnym nie jest tu cnotą redakcyjną, tylko jedynym sposobem, żeby nie znaleźć się wśród nich.

### Jak działa strona źródeł przewodnika: werdykt, źródło pierwotne i data odczytu

Strona źródeł to nie bibliografia na końcu artykułu. To osobna strona, na której każde twierdzenie stoi obok źródła pierwotnego, werdyktu i daty, kiedy źródło zostało przeczytane. Werdyktów jest kilka: potwierdzone, dodane, wycofane, poprawione.

Każdy akt ma własną kotwicę, więc artykuł odsyła do przepisu, a nie do całej strony. Każdy odnośnik jest oznaczony jako publikacja oficjalna albo jako reprodukcja — i to rozróżnienie wyłapało realny problem: część greckich odnośników prowadziła do komercyjnej bazy prawnej, a nie do dziennika urzędowego. Zostały, bo tekst rzeczywiście da się tam przeczytać, ale są opisane tym, czym są.

W stopce stoją dwie daty, nie jedna: kiedy przepis był sprawdzany i kiedy zmieniał się tekst samej strony. Jedna data musi skłamać o jednej z tych dwóch rzeczy.

Własne błędy projektu są opublikowane na tej samej stronie, na równi z rynkowymi. Serwis pisał, że greckiej ścieżki za 250 000 euro przez startup nie ma — jest, artykuł 100Α, dodany pod koniec 2024 roku. I pisał, że w maltańskich przepisach nie ma wymogu dochodowego — konkretnej liczby faktycznie nie ma, wymóg jest. Strona, która rozbiera cudze twierdzenia i milczy o dwóch swoich najgorszych, nie działa jako argument.

### Dziennik zmian prawnych, którego nie ma żadna z dwudziestu przeanalizowanych konkurencyjnych domen

Drugą rzeczą, której w niszy nie ma, jest przekrojowy dziennik zmian. Co się zmieniło, od kiedy, jakim aktem i która własna liczba serwisu przesunęła się razem z tym. Filtr po jurysdykcji, kotwica przy każdym wpisie nazwana od sensu zmiany i cały dziennik wystawiony jako dane maszynowo czytelne pod stałym adresem — do swobodnego użytku z podaniem źródła.

Osobna kolumna jest przeznaczona na przypadki, w których aktu nie ma wcale. Dubaj w lutym 2026 przestał wymagać, żeby połowa wartości nieruchomości była zapłacona przed złożeniem wniosku — wymogu nigdy nie było w federalnym załączniku, była to praktyka urzędowa i jej zniesienie nie potrzebowało dokumentu. Takie wpisy są oznaczone jako "brak opublikowanego aktu", a nie przepisane tak, jakby akt się znalazł.

Twierdzenie jest zawężone i tak właśnie sformułowane: takiego dziennika nie ma żadna z dwudziestu domen, które przeanalizowałem po ich mapach witryny. To nie to samo co "jedyny na świecie".

### Co pokazała analiza rynku rezydencji za inwestycje: zniesiona ścieżka, którą nadal się sprzedaje

Analiza dwudziestu domen branżowych dała cztery ustalenia i każde jest sprawdzalne w źródle pierwotnym.

Malta. Wyrok Trybunału Sprawiedliwości UE w sprawie C-181/23 z 29 kwietnia 2025 zakończył obywatelstwo za inwestycje. Dalej łańcuch: ustawa z 24 lipca 2025 i akt wykonawczy z 29 lipca, który usunął z rozporządzenia całą część razem z dwoma załącznikami. Na numer sprawy nie powołał się nikt z dwudziestu. Część rynku nadal sprzedaje zniesioną ścieżkę z cenami, a strona samej agencji państwowej szesnaście miesięcy po wyroku publikuje kwoty usuniętej ścieżki pod świeżymi datami.

Portugalia. Artykuł 90-A ustawy o cudzoziemcach znosi dla pobytu inwestycyjnego dokładnie jeden z wymogów ogólnych — wizę. Wymóg środków utrzymania zostaje. Dwie największe strony z czołówki wyników nie zawierają tych słów w ogóle, a największy serwis branżowy dodatkowo nie wspomina o przejściu z pięciu lat na dziesięć do obywatelstwa — szesnaście miesięcy po ustawie.

Grecja. Ścieżkę za 250 000 euro przez startup rynek przypisuje ustawie z lutego 2026. Jest starsza o czternaście miesięcy i wprowadziła ją inna ustawa, pod koniec 2024 roku.

Cypr. Przyspieszony pobyt stały sprzedaje lub opisuje siedmiu konkurentów z dwudziestu. Przepis, na którym on stoi, wymienia dwóch.

Każde ustalenie stało się treścią strony. Na tym polega różnica między treścią pisaną z konkurencji a treścią pisaną ze źródeł: ta druga daje to, czego w wynikach nie ma.

### Kalkulator kosztu rezydencji liczy nie próg, tylko to, co ponad nim

Próg wejścia publikują wszyscy. Tego, co płaci się ponad niego — podatków od przeniesienia własności, opłat prawnych i rejestracyjnych, wkładów państwowych, pierwszego przedłużenia — nie publikuje prawie nikt, choć płacą to wszyscy i za każdym razem.

Kalkulator liczy właśnie tę drugą część, wiersz po wierszu. Każda pozycja ma podstawę, stawkę i odnośnik do aktu. Tam, gdzie aktu nie ma i jest tylko praktyka rynkowa — czyli honorarium prawnika i agenta — pozycja jest tak opisana: to jedyne miejsce, w którym liczba nie wynika z przepisu, i jest to powiedziane, a nie przemilczane.

Dobór ścieżki obok działa jak zwykły quiz w tej niszy, z jedną różnicą: budżet sprawdza się względem realnej sumy, a nie reklamowego progu. Budżet 500 000 euro wchodzi w dwa programy z czterech, a do trzeciego brakuje tysiąca — wniosek, którego reklamowa tabela nie daje nigdy.

### Trzy języki przewodnika to nie jedno tłumaczenie: polski, angielski i rosyjski popyt wyglądają inaczej

Wersje rosyjska i polska nie są tłumaczone z angielskiej i jest to świadome.

Angielski artykuł o życiu w Grecji prowadzi od kosztów życia, bo angielski popyt jest tak wyrażony. Rosyjski prowadzi od przeprowadzki: zapytań o "koszty życia w Grecji" po rosyjsku praktycznie nie ma, a intencja wyraża się słowem o przeprowadzce. Polska wersja artykułu o dochodach i wydatkach jest zbudowana inaczej niż obie, bo polski popyt leży w kosztach życia, a nie w progach dochodowych.

Każda taka decyzja wynika z eksportu popytu, a nie z wygody tłumaczenia. Technicznie stoi za tym wielojęzyczność na własnych adresach dla każdego języka: grecki przewodnik ma swój adres po rosyjsku i swój po polsku, a nie prefiks doklejony do angielskiego.

### Dlaczego przewodnik po rezydencji za inwestycje wygląda jak redakcja danych, a nie witryna sklepowa

Decyzja wizualna nie jest tu oprawą, tylko konsekwencją tego, czym ten serwis jest. Kierunek nazywa się wewnątrz projektu "Data desk / Oxblood" — redakcja danych, nie witryna.

Biała strona i czarna płaszczyzna, i ani jednego szarego tła. Pierwsza wersja miała chłodnoszare tło i to właśnie ono sprawiało, że serwis wyglądał tanio: strona, na której połowa powierzchni to nieco inny odcień szarości, czyta się jak szablon. Szary kolor tekstu został, szare podkłady są zabronione. Kontrast daje nie wypełnienie, tylko czarna płaszczyzna przeciw białej: góra każdej strony jest ciemna, nagłówek żyje w jej wnętrzu, a na stronie głównej przechodzi w pierwszy ekran. To cały zabieg — serwis czyta się drogo bez ani jednego płatnego obrazka, bez gradientów i bez efektów. Dla projektu bez budżetu to wybór inżynierski, nie estetyczny.

Jeden kolor akcentowy, oxblood, z twardą normą zużycia: około pięciu procent ekranu. Powyżej tego udziału akcent przestaje czytać się jako redakcyjny i zaczyna czytać się jako ostrzeżenie. Na białym daje kontrast na poziomie AAA; na czarnej płaszczyźnie ten sam kolor nie nadaje się na tekst, więc ma osobną jasną parę — również zmierzoną. Współczynnik kontrastu jest zapisany obok wartości w systemie tokenów, a zasada projektu zabrania zmieniać kolor bez przeliczenia. Ta sama dyscyplina co przy liczbach prawnych, zastosowana do innego materiału.

Prawie nie ma zaokrągleń: zaokrąglone rogi to to, co zamienia tabelę danych z powrotem w kartę marketingową. Główna tabela porównawcza nie ma kontenera w ogóle — oddzielają ją od strony włosowe linie, a nie ramka i cień.

Trzy kroje do trzech ról, a nie dla ozdoby. Szeryfowy display na nagłówki, grotesk na tekst, monospace na numery artykułów, dzienników urzędowych i daty. Monospace nie jest tu ozdobą: wizualnie oddziela odnośnik do przepisu od prozy i sprawia, że cytat rozpoznaje się na pierwszy rzut oka. Jeden krój display na wszystkie trzy języki, z cyrylicą w doładowywanym zestawie.

### Kolor w schematach przewodnika niesie tylko status, a każdy status niesie dodatkowo słowo

Zasada wygląda na drobiazg, ale wyszła z testu, a nie z gustu. Ukierunkowany przegląd zestawów odcieni w przestrzeni barw OKLCH pokazał, że zestaw pięciu kolorów nie przechodzi progu rozróżnialności przy zaburzeniach widzenia barw: najlepszy wynik to 4,5 przy wymaganym minimum 8, a zestaw wyjściowy dawał 1,1. To właściwość samej przestrzeni, a nie nietrafiony dobór.

Stąd zasada dla wszystkich schematów w serwisie: kolor niesie tylko status albo wielkość, a każdy status niesie dodatkowo słowo. Cypr na kartach jurysdykcji nie jest po prostu wyszarzony — pod nim stoi "niesprawdzone". Zniesiona ścieżka na schemacie nie jest usunięta, tylko przekreślona i podpisana. Schemat, który stoi na samym kolorze, rozpada się w druku czarno-białym i dla człowieka, który barw nie rozróżnia.

Same schematy są generowane kodem, a nie rysowane ręcznie, i trafiają na stronę jako samowystarczalne pliki z osadzonymi krojami. Ani jednego emoji, ani jednego zdjęcia stockowego, ani jednej ikony-zapychacza: jedyne ilustracje w serwisie to własne schematy zbudowane ze sprawdzonych danych.

### Layout przewodnika: szerokość strony, punkt przełączenia nagłówka i tabele, które pozostają tabelami

Szerokość zadają marginesy, a nie kolumna tekstu. Marginesy rosną razem z ekranem, a maksymalna szerokość jest tylko sufitem, więc na szerokim monitorze wychodzi szeroka strona, a nie kolumna 1200 pikseli zgubiona pośrodku pustki. Tekst się przy tym nie rozłazi: każdy blok prozy niesie własną miarę wiersza.

Punkt przełączenia nagłówka jest zmierzony, a nie wybrany. Przy sześciu pozycjach nawigacji rosyjskie podpisy potrzebują 1072 pikseli szerokości treści — przy standardowym 1024 rząd się przepełniał. Nagłówek przełącza się na jednej szerokości dla wszystkich trzech języków, bo nawigacja pojawiająca się przy różnej szerokości w zależności od języka to nawigacja, o której nie da się rozumować.

Na wąskim ekranie tabele stają się kartami, nie przestając być tabelami. Wiersze układają się pionowo, ale w znacznikach pozostają prawdziwą tabelą: czytelnik idący po kolumnach z czytnikiem ekranu dostaje te same kolumny. Kosztowało to więcej pracy niż siatka bloków i jest to dokładnie ten przypadek, w którym dostępność i semantyka są ważniejsze niż szybkość budowy.

### Kontrole, które nie pozwalają metodzie przewodnika zepsuć się przy następnej publikacji

Metoda stojąca na dyscyplinie autora psuje się w trzecim miesiącu. Dlatego jest wyniesiona do kontroli, które przechodzą przy buildzie.

Publikacja artykułu nie przechodzi, jeśli odnośnik prowadzi do nieistniejącej kotwicy na stronie źródeł. Osobna kontrola nie pozwala dwóm stronom celować w to samo zapytanie. Liczba nie może zmienić się w tekście artykułu bez zmiany pliku weryfikacji.

To nudna część pracy i jednocześnie różnica między "staramy się być dokładni" a "niedokładność technicznie nie przechodzi".

### Szybkość, semantyka i pierwsza wizyta z ChatGPT: co przewodnik pokazał przez dwa tygodnie

Na produkcyjnym buildzie PageSpeed daje 95 za wydajność, 97 za dostępność, 100 za sprawdzone metody i 100 za SEO, a test przeglądania agentowego przechodzi w całości, 2 z 2. Dla tego projektu drugie jest ważniejsze niż pierwsze: strukturę stron czytają asystenci, nie tylko przeglądarka.

W pierwszych dwóch tygodniach Search Console pokazuje setki zapytań, na które serwis już się wyświetla. Dla domeny bez ani jednego linku zewnętrznego to wczesny obraz, a nie wynik, i wniosków o pozycjach z niego nie ma — pokazuje natomiast, że indeksowanie idzie szerokim frontem, a nie jedną stroną.

Osobno stoi pierwsza merytoryczna wizyta: przyszła z ChatGPT, na stronę, której Google jeszcze nie odwiedziło. Kolejność odwrotna niż zwykle. Nie twierdzę, że wywołała ją metoda — to obserwacja, a nie zmierzona zależność. Ale to, co czyni stronę cytowalną dla modelu językowego — liczba z numerem artykułu ustawy, data odczytu, osobna strona źródeł, maszynowo czytelny dziennik zmian — to dokładnie to, co w tym projekcie zbudowano celowo.

Teza case study w jednym zdaniu: maszyna cytuje to, co da się sprawdzić.

### Czego w projekcie o rezydencji za inwestycje uczciwie jeszcze nie zrobiono

Lista należy do case study, bo go wzmacnia, a nie osłabia.

Domena nie ma linków zewnętrznych i to jest główne ograniczenie całej pracy wyszukiwarkowej. Połowa lejka nie jest zbudowana: nieruchomość jako płacące dno jest jeszcze przed nami. Cypr jest odłożony celowo — źródła pierwotne się nie otwierają, a dopóki się nie otwierają, strony nie będzie. Adresy do subskrypcji zmian są zbierane, a wysyłać nie ma jeszcze czego. Plan treści jest napisany i wykonany w niewielkiej części.

Serwis ma dwa tygodnie. Warto to powiedzieć wprost, a nie omijać: to case study o tym, co zbudowano i jaką metodą, a nie o tym, co zdążyło zadziałać.

[TECHNOLOGIES USED]
Next.js, React, TypeScript, SCSS modules, Sanity, Vercel
