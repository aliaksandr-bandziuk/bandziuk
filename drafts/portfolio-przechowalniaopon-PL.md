═══════════════════════════════════════════════════════════════
PORTFOLIO: przechowalniaopon.pl — PL
═══════════════════════════════════════════════════════════════

[SLUG]
landing-przechowalni-opon-w-warszawie

[TITLE]
Trójjęzyczny landing przechowalni opon w Warszawie

[FULL TITLE — H1]
Budowa trójjęzycznego landingu przechowalni kół i opon w Warszawie z panelem do edycji i zieloną strefą PageSpeed

[EXCERPT] (≤200 znaków)
Własny motyw WordPress bez bibliotek: klient sam edytuje treść i snippety, strona ładuje się w 102 KB i ma 100 na 100 za szybkość na telefonie.

[SEO]
metaTitle: Case study: landing przechowalni opon w Warszawie
metaDescription: Trójjęzyczny landing pod sezonową reklamę: własny motyw WordPress bez bibliotek, edytowalne snippety, 102 KB na starcie i 100 za szybkość na mobile.

[KEY FEATURES]
clientName: Przechowalnia kół i opon, Falenty Nowe pod Warszawą
industry: Sezonowe przechowywanie kół i opon
website: https://przechowalniaopon.pl/ (typ — link, etykieta przechowalniaopon.pl, index, follow)
services: Tworzenie stron internetowych, SEO

[PREVIEW IMAGE]
alt: "Pierwszy ekran landingu przechowalniaopon.pl z nagłówkiem o przechowywaniu kół w Warszawie"

[PROBLEM]
Przechowalnia kół pod Warszawą przyjmuje zgłoszenia w dwóch krótkich szczytach: wiosną i jesienią, kiedy całe miasto zmienia opony w tym samym momencie. W sezonie klient kupuje reklamę, więc landing nie jest dla niego wizytówką, tylko miejscem, do którego trafia opłacony ruch. Poprzednia strona była jednojęzyczna, słabo zbierała zgłoszenia i reklamowała usługi, których firma już nie świadczy.

Dwa wymagania klienta wyznaczyły całą pracę i ciągną w przeciwne strony. Pierwsze: sam zajmuje się SEO swojej firmy i chciał edytować metatagi, teksty i ceny bez programisty. Drugie: strona ma być szybka. Na WordPressie te dwa wymagania zwykle się wykluczają — edytowalność przynoszą ze sobą kreator stron, wtyczka formularzy i wtyczka SEO z własnymi skryptami, i z zielonej strefy na telefonie nic nie zostaje. Zadanie polegało na tym, żeby mieć jedno i drugie, a nie wybierać.

[TASK]
- Zbudować stronę jednoekranową w trzech językach: polskim jako głównym, rosyjskim i angielskim
- Dać klientowi możliwość samodzielnej edycji treści, cen i metatagów we wszystkich trzech językach
- Utrzymać zieloną strefę PageSpeed na telefonach, bo tam trafia ruch z reklamy
- Zbudować obsługę zgłoszeń tak, żeby zgłoszenie nie ginęło ani przy awarii poczty, ani przy błędzie w skrypcie
- Odciąć spam, nie stawiając między odwiedzającym a zgłoszeniem ani jednej dodatkowej bariery
- Ustawić analitykę i piksel tak, żeby dało się mierzyć reklamę bez naruszania RODO

[RESULTS]
- PageSpeed na telefonach: wydajność 100, dostępność 95, sprawdzone metody 100, SEO 100
- Test przeglądania agentowego zaliczony w całości, 2 z 2 — stronę czytają asystenci, nie tylko przeglądarka
- 102 KB i osiem żądań przy pierwszym ładowaniu, ani jednego żądania do obcego serwera przed zgodą na cookies
- Zero zewnętrznych bibliotek na froncie: bez jQuery, bez frameworka CSS, bez fontu ikon, bez fontów z cudzego CDN
- Cała treść, ceny, pytania i metatagi trzech języków edytowane przez klienta na jednym ekranie panelu
- Formularz wysyła zgłoszenie także bez JavaScriptu, a samo zgłoszenie zawsze zapisuje się w bazie przed powiadomieniami
- Spam odcinany bez reCAPTCHA — bez obcego skryptu przy każdym ładowaniu i bez straty na czasie ładowania
- Mapa witryny zawiera dokładnie trzy adresy: służbowe archiwa WordPressa przekierowują na stronę główną

[WORK DONE]
- Własny klasyczny motyw WordPress napisany od zera, bez frameworków i bez jQuery
- Krytyczny CSS wstawiony w head, reszta ładowana nieblokująco, z zapasowym rozwiązaniem przy wyłączonym JavaScripcie
- Fonty pocięte na własne subsety, wyborem pliku steruje unicode-range: cyrylica nigdy nie pobiera się na polskiej wersji
- Obrazy w AVIF z zapasowym WebP, jawne wymiary przeciw przesunięciom układu, priorytetowe ładowanie pierwszego ekranu
- Schemat pól ACF zarejestrowany w PHP, a nie wyklikany w interfejsie: wersjonuje się i przenosi kopiowaniem pliku
- Ustawienia serwisu przeniesione na tę samą stronę co treść, drugą sekcją pod edytorem
- Trzy języki na Polylangu z osobnymi plikami treści i własną regułą lokalizacji pól dla wszystkich tłumaczeń strony głównej
- Metatagi każdego języka ustawione w motywie i podstawiane tylko wtedy, gdy pole we wtyczce SEO jest puste: wartość klienta zawsze wygrywa
- Formularz na dwóch drogach — zapytanie z poziomu skryptu i zwykła wysyłka formularza dla pozostałych, jedna walidacja
- Zgłoszenia przechowywane jako niepubliczny typ wpisu z kolumnami: telefon, rozmiar, formularz, data
- Własny antyspam: biała lista pól, ocena punktowa, tłumienie duplikatów, limit powiadomień na godzinę
- Powiadomienia na pocztę przez SMTP z uwierzytelnianiem i do komunikatora, oba po odpowiedzi dla odwiedzającego
- JSON-LD lokalnej firmy i pytań napisany ręcznie, widełki cenowe liczone z tabeli cen
- Analityka i piksel podłączane dopiero po zgodzie, w bezczynnej klatce przeglądarki

[SCREENSHOTS]

1. (idzie do previewImage, nie trafia do slidera)
   title: "Pierwszy ekran landingu"
   alt: "Pierwszy ekran strony przechowalni kół w Warszawie z nagłówkiem i przyciskiem zgłoszenia"
   caption: Jedyny cel strony to zgłoszenie na przechowanie i działanie jest dostępne od razu, bez przewijania.

2. title: "Adres, telefon i godziny otwarcia pod pierwszym ekranem"
   alt: "Blok z adresem przechowalni, telefonem i godzinami otwarcia"
   caption: Adres, telefon i godziny stoją tekstem zaraz pod pierwszym ekranem — i dla człowieka, i dla lokalnego wyszukiwania.

3. title: "Dlaczego warto przechowywać koła w magazynie"
   alt: "Sekcja o tym, dlaczego warto przechowywać koła w magazynie, z wykazem tego, co obejmuje usługa"
   caption: Argumenty idą przed ceną: człowiek najpierw rozumie, za co płaci, a dopiero potem widzi kwotę.

4. title: "Tabela cen według rozmiaru kół"
   alt: "Tabela cen sezonowego przechowywania według rozmiarów od R12 do R23, osobno dla opon i kół w komplecie"
   caption: Prawdziwa tabela z nagłówkami kolumn, a nie siatka z bloków: czytają ją i wyszukiwarki, i modele językowe.

5. title: "Formularz zgłoszenia z dwóch pól"
   alt: "Formularz rezerwacji miejsca z polem telefonu i listą rozmiarów kół"
   caption: Telefon i rozmiar — to wszystko. Rozmiary na liście biorą się z tabeli cen, więc nie mogą rozjechać się z cennikiem.

6. title: "Pytania i odpowiedzi o przechowywaniu kół"
   alt: "Sekcja pytań i odpowiedzi o sezonowym przechowywaniu kół z rozwiniętą pierwszą odpowiedzią"
   caption: Odpowiedzi są w kodzie strony także wtedy, gdy są zwinięte, więc widzą je wyszukiwarki i modele bez jednego kliknięcia.

7. title: "Kontakt i dojazd do przechowalni"
   alt: "Sekcja kontaktu z adresem, telefonem, godzinami otwarcia i mapą dojazdu"
   caption: Mapa doczytuje się dopiero, gdy sekcja zbliża się do ekranu — do tego momentu nie ma ani jednego żądania do obcej domeny.

8. title: "Angielska wersja landingu"
   alt: "Angielska wersja strony przechowalni kół"
   caption: Angielska wersja pisana dla obcokrajowców, którym trudno zadzwonić do polskojęzycznego serwisu, a nie tłumaczona słowo w słowo.

9. title: "Rosyjska wersja landingu"
   alt: "Rosyjska wersja strony przechowalni kół"
   caption: Rosyjska wersja używa słów, którymi to zapytanie zadaje się w Warszawie, a nie kalki z polskiego.

10. title: "Wyniki PageSpeed na telefonach"
    alt: "Raport PageSpeed z wynikami 100, 95, 100, 100 i zaliczonym testem przeglądania agentowego"
    caption: Wydajność 100, dostępność 95, sprawdzone metody 100, SEO 100 i pełne zaliczenie testu przeglądania agentowego.

[MAIN CONTENT]

### Klient sam zajmuje się SEO: dlaczego edycja snippetów była wymaganiem, a nie wygodą

Zwykle na stronie małej firmy metatagi zmienia ten, kto ją zbudował. Tu jest odwrotnie: klient sam zna się na wyszukiwarkach i chciał zmieniać tytuły i opisy samodzielnie, w trakcie sezonu, bez maila do programisty i bez czekania.

To wymaganie brzmi niewinnie, ale właśnie ono zwykle obciąża stronę. Edytowalność na WordPressie przynoszą ze sobą kreator stron, wtyczka formularzy i wtyczka SEO, każde z własnymi stylami i skryptami — i na telefonie z zielonej strefy nie zostaje nic. A drugie wymaganie klienta dotyczyło dokładnie szybkości.

Rozwiązanie polega na tym, że edytowalność i waga leżą w różnych warstwach. Panel administracyjny działa na serwerze i do przeglądarki odwiedzającego nie trafia w ogóle. Ciężką stronę robi nie sama możliwość edycji, tylko sposób, w jaki się ją zwykle dostarcza. Dlatego pola zbudowane są własnym schematem, a na front nie idzie ani jedna linia cudzego CSS.

### Jak metatagi i treść landingu edytuje się w panelu na jednym ekranie

Metatagi każdego języka ustawione są w motywie i trafiają na stronę przez filtry wtyczki SEO, ale tylko wtedy, gdy odpowiednie pole we wtyczce jest puste. Klient edytuje w znanym sobie miejscu, jego wartość zawsze wygrywa — a jednocześnie każdy język ma sensowny snippet od pierwszego dnia, zamiast pokazywać w wynikach służbową nazwę strony.

Cała reszta edycji sprowadzona jest do jednej strony. Rozdzielanie treści landingu i jego własnych ustawień na dwa ekrany panelu oznacza, że człowiek szuka telefonu i adresu tam, gdzie ich nie ma. Ustawienia — telefon, adres, współrzędne, godziny otwarcia, adres poczty na zgłoszenia, identyfikatory analityki — przeniosły się na tę samą stronę, drugą sekcją pod edytorem.

Strony główne trzech języków otwierają się w klasycznym edytorze celowo. Edytor blokowy chowa pola do zwiniętego panelu przy dolnej krawędzi ekranu i klient, otwierając stronę, nie zobaczył ani jednego pola z pięćdziesięciu. Klasyczny edytor stawia je od razu pod tytułem, czyli tam, gdzie się ich szuka.

Schemat pól zarejestrowany jest w PHP, a nie wyklikany w interfejsie. Różnica polega na tym, że taki schemat wersjonuje się razem z motywem, przenosi na inny serwer kopiowaniem pliku i nie zależy od stanu bazy danych.

### Landing pod sezonową reklamę: dlaczego szybkość liczy się tu w koszcie kliknięcia

Przechowywanie kół to biznes sezonowy z dwoma krótkimi szczytami. W te tygodnie klient kupuje reklamę, a to zmienia cenę wolnego ładowania. Przy ruchu z wyszukiwarki wolna strona kosztuje część odwiedzających. Przy ruchu płatnym kosztuje część pieniędzy: wizyta jest już opłacona, a człowiek wychodzi, nie doczekawszy pierwszego ekranu.

Stąd decyzje, które inaczej wyglądałyby na perfekcjonizm. Zero obcych żądań przed zgodą na cookies — czyli nic cudzego między kliknięciem w reklamę a pierwszym ekranem. Brak captchy — czyli na drodze do zgłoszenia nie ma ani opłaconej sekundy ładowania, ani dodatkowego działania. Trzy języki pod jednym adresem — czyli na jedną stronę można prowadzić trzy kampanie do trzech różnych grup odbiorców.

### Z czego składa się 102 KB pierwszego ładowania i osiem żądań

Pierwsze ładowanie strony dla gościa bez ciasteczka zgody: HTML razem z krytycznym CSS, wbudowanymi ikonami i mikrodanymi — 34 KB, odroczony CSS — 7 KB, skrypt — 6 KB, cztery pliki fontów — 19 KB, zdjęcie pierwszego ekranu w AVIF — 37 KB. Razem około 102 KB i osiem żądań, ani jednego do cudzej domeny.

Złożyło się to z rezygnacji, a nie z optymalizacji. Na froncie nie ma jQuery, nie ma frameworka CSS, nie ma fontu ikon: czternaście ikon leży w kodzie strony jako wbudowane SVG. Z samego WordPressa zdjęte zostało wszystko, czego landing nie potrzebuje — skrypty emoji, oEmbed, służbowe metatagi i style edytora blokowego, którego tu i tak nie ma. Krytyczny CSS jest w head, reszta ładuje się nieblokująco i działa nawet przy wyłączonym JavaScripcie.

Kolejność jest właśnie taka: najpierw nie bierzemy zbędnego, potem ściskamy potrzebne. Optymalizacja cudzego zestawu bibliotek daje procenty, rezygnacja z niego — wielokrotności.

### Fonty landingu pocięte na własne subsety zamiast standardowego zestawu

Standardowy rozszerzony zestaw łaciński waży 31 KB, a polszczyźnie potrzebne jest z niego dokładnie osiem dodatkowych liter. Własny subset na tych literach — 2 KB.

Dalej działa unicode-range: przeglądarka pobiera tylko ten plik, którego znaki faktycznie pojawiły się na stronie. Cyrylica nigdy nie ładuje się na polskiej wersji, polskie znaki diakrytyczne — na rosyjskiej.

Osobny szczegół, który warto zauważyć przed lokalizacją, a nie po niej. Font wybrany na nagłówki nie ma cyrylicy w ogóle — rosyjska wersja spadłaby do fontu systemowego już po gotowym layoucie. Pod tą samą nazwą rodziny cyrylicę wydaje najbliższy geometryczny grotesk, a o tym, który plik wziąć, decyduje ten sam unicode-range. Rosyjska wersja wygląda jak pozostałe, a nie jak wersja robocza.

### Gdzie na stronie stoją przyciski i formularze, żeby zgłoszenie nie zależało od jednego ekranu

Strona prowadzi do jednego działania — zgłoszenia kompletu na przechowanie — i dróg do niego jest kilka, bo ludzie trafiają tu na różnym etapie decyzji.

Formularz stoi zaraz pod tabelą cen: człowiek dowiedział się, ile to kosztuje, i działanie jest obok, a nie cztery ekrany dalej. Drugi egzemplarz tego samego formularza stoi niżej, za sekcjami, które zdejmują zastrzeżenia — dla tych, którzy najpierw doczytali. Telefon jest klikalny i wyniesiony do nagłówka: część odbiorców nie wypełnia formularzy w ogóle i dzwoni, zwłaszcza z telefonu.

Sam formularz ma dwa pola. Telefon i rozmiar kół, i tyle. Na liście rozmiarów jest wariant „nie wiem", bo człowiek, który nie pamięta rozmiaru swoich kół, po prostu zamyka stronę — a to akurat ten, któremu przechowalnia jest najbardziej potrzebna.

Ceny są otwarte w tabeli, a nie schowane za „zapytaj o wycenę". Otwarta cena odsiewa niedopasowanych przed telefonem i zdejmuje główne zastrzeżenie przed formularzem. Tej samej pracy służą sekcja o błędach samodzielnego przechowywania i dziesięć pytań z odpowiedziami: odpowiadają na to, co inaczej padłoby w rozmowie i do zgłoszenia mogłoby nie dojść.

To decyzje, a nie zmierzony wynik: sezon jest przed nami i danych o konwersji z tej strony jeszcze nie ma.

### Trzy języki landingu jako trzy grupy odbiorców i trzy kampanie pod jednym adresem

Wersje rosyjska i angielska są napisane pod swoich czytelników, a nie przetłumaczone z polskiej. Angielska tłumaczy, gdzie leżą Falenty Nowe względem Warszawy, i wprost mówi, że pisać można po angielsku: obcokrajowcowi trudno zadzwonić do polskojęzycznego serwisu i to jest jego prawdziwa przeszkoda. Rosyjska używa słów, którymi zapytanie zadaje się w mieście, a nie kalki z polskiego.

Teksty leżą w plikach językowych, gdzie tłumaczenie nakłada się na polską podstawę: nieprzetłumaczony klucz nie daje pustej sekcji, tylko pokazuje polski wariant. Ceny są tylko w polskim pliku i dziedziczą je oba tłumaczenia — jedna liczba w jednym miejscu, nie ma czemu się rozjechać.

Dla reklamy oznacza to trzy kampanie do trzech grup odbiorców, prowadzące pod trzy adresy tej samej strony. Przełącznik języków zrobiony jest bez flag: flaga oznacza kraj, a nie język, i rosyjska flaga na polskiej stronie niesie sens, którego nikt nie zamawiał.

### Lokalne SEO przechowalni opon w Warszawie: adres, godziny i mikrodane w kodzie strony

Przechowalnia obsługuje Warszawę i okolice, a klient szuka jej zapytaniem z nazwą miasta. Dlatego wszystko, co pozwala wyszukiwarce powiązać stronę z miejscem, stoi w kodzie tekstem, a nie na obrazku i nie wyłącznie w mikrodanych: pełny adres w Falentach Nowych, godziny otwarcia, klikalny numer telefonu i mapa dojazdu.

Mikrodane lokalnej firmy napisane są ręcznie, bo darmowa wersja wtyczki SEO ich nie wystawia. W grafie stoi lokalna firma z branży motoryzacyjnej i blok pytań, w każdym z trzech języków. Widełki cenowe liczą się z tabeli cen, więc nie trzeba ich wpisywać ręcznie i potem zapominać o aktualizacji.

Przy sprawdzaniu znalazł się konflikt: mój węzeł witryny szedł z tym samym identyfikatorem co węzeł wtyczki — dwie różne definicje pod jedną nazwą. To nie jest „więcej danych", tylko sprzeczność. Własny węzeł został usunięty, przy wtyczce zostały strona, okruszki, witryna i organizacja, a my dodajemy tylko to, czego ona nie robi.

Osobna praca to higiena strony jednoekranowej. WordPress tworzy archiwa autora, dat, kategorii i tagów: puste strony, które wyszukiwarka zaindeksuje, jeśli je znajdzie. Wszystkie przekierowują na stałe na stronę główną i są wyłączone z mapy witryny. W mapie są dokładnie trzy adresy — po jednym na język.

### Dlaczego formularz zgłoszenia działa bez JavaScriptu i zawsze zapisuje zgłoszenie w bazie

Formularz ma dwie drogi: zapytanie do serwera z poziomu skryptu dla przeglądarek, w których skrypty działają, i zwykłą wysyłkę formularza dla wszystkich pozostałych. Walidacja jest jedna. Nie chodzi o odsetek odwiedzających z wyłączonymi skryptami — chodzi o to, że jeden błąd w skrypcie nie może zabić jedynego punktu konwersji na stronie, za ruch do której zapłacono.

Zgłoszenie zawsze zapisuje się w bazie jako osobny wpis z kolumnami: telefon, rozmiar, z którego formularza przyszło, data. W pierwszej wersji było „poczta plus komunikator", co oznaczało: padnie poczta, zablokują bota — zgłoszenie zniknie bez śladu.

Kolejność operacji została przestawiona po pomiarze. Było: mail, potem komunikator, potem zapis do bazy, potem odpowiedź dla odwiedzającego — jedyna kopia zgłoszenia pojawiała się na końcu, po dwóch wywołaniach sieciowych, a człowiek przez ten czas patrzył na kręcące się kółko. Jest: zapis do bazy, odpowiedź dla odwiedzającego, powiadomienia na końcu. Baza nie zależy od cudzej sieci, więc idzie pierwsza.

Format telefonu celowo nie jest sztywny. Do Warszawy przyjeżdża się z numerami ukraińskimi, białoruskimi i niemieckimi, a maska polskiego formatu takiego numeru po prostu nie przyjmie. Skrypt zostawia plus i cyfry oraz rozstawia spacje, ale nie odmawia.

### Antyspam dla formularza z dwóch pól bez reCAPTCHA i bez utraty klientów

reCAPTCHA odpadła z trzech powodów naraz: obcy skrypt przy każdym ładowaniu strony, dane odwiedzających poza naszą infrastrukturą i strata na szybkości, o którą walczyliśmy przez cały projekt.

Zamiast niej — model zagrożeń pod konkretny formularz. Są w nim dwa pola, jedno z nich to lista wyboru. Nie ma wolnego tekstu, linków ani adresów mailowych, więc zwyczajny spam nie ma się gdzie położyć. Realnie groźne są trzy rzeczy: podstawienie własnej wartości w jedyne pole tekstowe, które dotrze do człowieka, lawina wysyłek i duplikaty.

Zasada, na której wszystko stoi: nic nie ginie po cichu. Zgłoszenie zapisuje się zawsze, a ocena zmienia tylko etykietę — powiadomienie wychodzi w każdym przypadku, po prostu oznaczone. Fałszywe zadziałanie kosztowałoby klienta, a klient jest droższy niż jedna śmieciowa pozycja na liście.

Działa to tak: biała lista pól z twardym czyszczeniem wartości, ocena punktowa po kilku słabych sygnałach, z których żaden nie zadziała w pojedynkę, tłumienie duplikatów — ten sam numer z tym samym rozmiarem w ciągu pół godziny to drugie kliknięcie, a nie drugie zgłoszenie — i limit powiadomień na godzinę, żeby lawina nie zapchała skrzynki. Podejrzane zgłoszenia dostają etykietę i osobny widok na liście.

Numery nie są sprawdzane pod kątem kraju: „polski format" odcinałby żywych klientów, a pod Warszawą stanowią oni zauważalną część.

### Zgoda na cookies zgodna z RODO, która nie przeszkadza mierzyć reklamy

Analityka i piksel podłączają się dopiero po wyraźnej zgodzie. To wymóg RODO wobec ciasteczek marketingowych, ale tutaj dał też wygraną techniczną: narzędzia mierzące szybkość przychodzą jako czysty gość i tych skryptów nie widzą w ogóle. Właściwa decyzja prawna okazała się przy okazji właściwą decyzją techniczną.

Wstępne połączenie z obcymi domenami serwer wydaje tylko tym, którzy zgodę już mają. Dla pozostałych nagłówek strony zostaje czysty.

Odrzucenie jest tak samo dostępne jak zgoda: dwa równorzędne przyciski, odrzucenie stoi pierwsze. Zgoda, której trudno nie udzielić, nie jest dobrowolna. W stopce jest przycisk wycofania zgody; jeśli skrypty już wystartowały, strona przeładowuje się — wyłączyć ich w locie nie można i udawanie, że można, byłoby nieuczciwe.

Dopóki identyfikatory analityki nie są wpisane w panelu, banera nie ma w ogóle: nie ma o co pytać o zgodę.

Polityka prywatności napisana jest pod tę stronę, a nie skopiowana: lista zbieranych danych sprowadzona do tego, co formularz faktycznie zbiera, opisane jest, że adres IP nie jest przechowywany, tylko haszowany na potrzeby licznika wysyłek. Trzy wersje językowe są wyłączone z indeksowania, ale link do nich z formularza pozostaje działający.

### Co zrobiono, żeby landing czytały modele językowe, a nie tylko wyszukiwarki

Część decyzji na tej stronie podjęta jest z myślą o tym, że będą ją streszczać asystenci, a nie tylko pokazywać w wynikach. Test przeglądania agentowego przechodzi w całości, ale rzecz nie w odhaczeniu, tylko w tym, z czego się to składa.

Ceny leżą w prawdziwej tabeli z nagłówkami wierszy i kolumn, a nie w siatce z bloków: taką tabelę da się zacytować w całości. Adres, godziny otwarcia i telefon stoją tekstem w kodzie, a nie na obrazku i nie wyłącznie w mikrodanych. Odpowiedzi na pytania są w dokumencie także w stanie zwiniętym, więc dostępne bez wykonywania skryptów. Nagłówek pierwszego poziomu jest jeden, dalej ścisła hierarchia bez przeskakiwania poziomów.

Pytania sformułowane są tak, jak zadaje się je na głos: „od czego zależy cena", „czy muszę przywieźć sam", „czy przechowujecie same opony bez felg". Odpowiedzi mają po kilka zdań, z wyjaśnieniem, a nie jedną linijkę.

### Pięć błędów w budowie landingu i ich prawdziwe przyczyny

Najbardziej użyteczna część pracy to nie „zrobiłem ładnie", tylko „znalazłem przyczynę". Pięć przypadków, w których objaw i przyczyna były z różnych miejsc.

Zdjęcie pierwszego ekranu pobierało się w dwóch wariantach naraz i ważyło 269 KB z 310 KB całej strony. Przyczyna: wymiary zadeklarowane przy wstępnym pobieraniu nie zgadzały się z wymiarami zadeklarowanymi przy samym obrazku, więc przeglądarka uczciwie brała po jednym pliku z każdego źródła. Do tego ukryta regułą kopia obrazka pobierała się po to, żeby nigdy się nie pokazać. Po sprowadzeniu obu miejsc do jednego źródła — 42 KB.

Wszystkie ikony motywu ważyły dziesięć–dwadzieścia razy więcej niż powinny, a zdjęcia po kilka kilobajtów za dużo. Przyczyna nie leżała w kompresji: kanał, którym pliki trafiały na dysk, dopisywał do nich metadane o pochodzeniu. Czyszczenie na miejscu, dla każdego formatu inaczej — a przy AVIF z poprawieniem wewnętrznych przesunięć, bo inaczej plik przestaje się otwierać. Trzynaście ikon: 117 KB zamieniło się w 16 KB.

Sekcje strony znikały dokładnie po tym, jak klient pierwszy raz otworzył i zapisał stronę. Przyczyna: pusty powtarzalny zestaw pól zwraca jedną wartość przed pierwszym zapisem, a inną po nim, a sprawdzenie pustości łapało tylko pierwszą.

Człowiek, który nie zna rozmiaru swoich kół, nie mógł wysłać zgłoszenia. Wariant „nie wiem" miał wartość służbową, a funkcja czyszcząca zostawiała tylko litery, cyfry i myślniki — i zamieniała go w pusty ciąg. Błąd wprowadziłem sam godzinę wcześniej, zaostrzając antyspam. Naprawione tak, że lista rozmiarów stała się wspólna dla formularza i dla sprawdzenia, a wartości z cennika wracają dosłownie: cennik należy do klienta i filtr nie ma prawa go poprawiać.

Człowiek, który dwa razy pomylił się w numerze, za trzecim razem dostawał blokadę. Licznik wysyłek liczył wszystkie próby, także te, które nie przeszły walidacji. Sprawdzenie i zwiększenie licznika zostały rozdzielone: licznik rośnie tylko przy przyjętych zgłoszeniach.

### Co zostało po stronie klienta i hostingu

Lista jest krótka i uczciwa. Identyfikatory analityki i piksela wpisuje się w panelu, kodu się przy tym nie rusza. Linki do mediów społecznościowych w stopce czekają na same linki, layout pod nie jest gotowy. Politykę prywatności warto pokazać prawnikowi i potwierdzić okres przechowywania zgłoszeń. Dziesięć odpowiedzi na pytania warto przeczytać właścicielowi firmy: część szczegółów wyprowadzona jest z tego, co było już opublikowane na starej stronie, i z praktyki branżowej, a potwierdzić je może tylko on.

Danych o konwersji jeszcze nie ma — sezon jest przed nami. To case study o tym, co zbudowano i dlaczego właśnie tak, a nie o tym, co zdążyło zadziałać.

[TECHNOLOGIES USED]
WordPress, PHP, JavaScript, SEO, Web Accessibility, Hosting & Deployment
