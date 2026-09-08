# DRAFT PL — локализация blog-sitemap-lastmod-EN.md
# Ключевые фразы в каждом H2: «mapa witryny» в пięciu из siedmiu, «lastmod» в czterech.
# Названия отчётов GSC даны по-польски с английским оригиналом в скобках.

Title: lastmod w mapie witryny: dlaczego Google przestaje ją czytać i jak to naprawić
Slug: google-przestal-czytac-mape-witryny-lastmod
Meta title: lastmod w mapie witryny: dlaczego Google jej nie czyta
Meta description: Mapa witryny bez pola lastmod jest odczytywana coraz rzadziej, więc nowe adresy pozostają niewykryte. Jak sprawdzić datę odczytu w Search Console i to naprawić.

---

> Szybka odpowiedź: Google całkowicie ignoruje `changefreq` i `priority`, a `lastmod` bierze pod uwagę tylko wtedy, gdy pole jest konsekwentnie prawdziwe. Mapa witryny bez `lastmod` nie daje Google żadnego powodu, by do niej wracać — plik jest odczytywany coraz rzadziej, aż w końcu każdy adres dodany po ostatnim odczycie zostaje niewykryty. Sprawdźcie datę ostatniego odczytu w raporcie map witryny: jeśli ma kilka miesięcy, a wy w tym czasie publikowaliście, to jest wasz problem. Naprawa przenosi strony z niewidzialnych do wykrytych. Nie sprawia, że zaczynają rankować.

Jest w technicznym SEO awaria, która nigdzie nie zgłasza błędu. Mapa witryny przechodzi walidację. Search Console raportuje ją jako poprawną. Strony istnieją, ładują się i zwracają kod 200. A Google większości z nich nigdy nie widział.

## 415 adresów w mapie witryny, 27 wykrytych stron w Search Console

Pewna witryna miała w mapie 415 adresów. Raport map witryny w Search Console pokazywał plik jako odczytany poprawnie: bez błędów, bez ostrzeżeń. Liczba przy pozycji „wykryte strony" (Discovered pages) wynosiła 27.

Nie 27 zaindeksowanych — 27 *wykrytych*. Pozostałych 388 adresów Google nigdy nie pobrał, żeby w ogóle wydać o nich jakikolwiek osąd. Nie zostały odrzucone, nie zostały uznane za mało ważne, nie przegrały z konkurencją. Były nieznane.

Data przy pozycji „ostatnie odczytanie" (Last read) miała prawie rok. Wszystko, co opublikowano po tej dacie, nigdy nie trafiło do kolejki Google, a plik, który miał to ogłaszać, był pomijany.

## Co robi lastmod w mapie witryny i dlaczego changefreq oraz priority nic nie dają

Protokół map witryn definiuje trzy opcjonalne elementy przy każdym adresie: `lastmod`, `changefreq` i `priority`. Ich realny status nie jest równy i właśnie tutaj myli się większość generatorów.

Dokumentacja Google mówi wprost, że wartości `<priority>` i `<changefreq>` są ignorowane. Obie od lat. Generator, który starannie wylicza `changefreq: weekly` i `priority: 0.8` dla każdego adresu, produkuje ozdobę.

Z `lastmod` jest inaczej: Google z niego korzysta, ale warunkowo. Dokumentacja zastrzega, że wartość jest używana tylko wtedy, gdy jest „konsekwentnie i weryfikowalnie prawdziwa" — weryfikowalnie na przykład przez porównanie z tym, kiedy strona faktycznie się zmieniła. Ma odzwierciedlać ostatnią *istotną* zmianę: treści głównej, danych strukturalnych, linków. Podbicie daty przy poprawce roku w stopce istotne nie jest, a witryna, która podbija ją przy każdej drobnostce, uczy Google, żeby temu polu nie ufać.

Zawodzą więc oba końce skali. Mapa witryny zupełnie bez `lastmod` nie daje Google z czym pracować. Mapa, w której każdy adres twierdzi, że zmienił się dzisiaj, daje Google powód, żeby przestać w to pole wierzyć.

## Dlaczego Google przestaje czytać mapę witryny bez lastmod

Budżet indeksowania jest skończony, a ponowne odczytanie mapy witryny coś kosztuje. Jeśli plik nigdy nie niesie sygnału, że cokolwiek w środku się zmieniło, rozsądnym zachowaniem jest zaglądać do niego coraz rzadziej.

Dla witryny statycznej to bez znaczenia. Dla witryny, która publikuje, jest to cicha katastrofa: każdy nowy adres jest ogłaszany w pliku, którego nikt nie otwiera. Strony nie są zablokowane, nie mają `noindex`, nie są osierocone w żaden sposób, który wychwyciłby crawler. Po prostu nigdy nie zostają wspomniane Google w sposób, który skłania do wizyty.

I nic w Search Console nie oznacza tego jako problemu, bo z punktu widzenia mapy witryny wszystko jest w porządku. Raport mówi „Sukces". Mówi też, że plik odczytano ostatnio jedenaście miesięcy temu, ale tej linijki prawie nikt nie czyta.

## Jak sprawdzić lastmod w mapie witryny przez Search Console w pięć minut

Trzy sprawdzenia, w tej kolejności.

Otwórzcie raport map witryn w Search Console i spójrzcie na datę ostatniego odczytania, a nie na status. Porównajcie ją z tym, kiedy ostatnio coś publikowaliście. Kilkumiesięczna luka na witrynie, która regularnie publikuje, jest znaleziskiem.

Porównajcie liczbę wykrytych stron z liczbą adresów w pliku mapy. Jeśli mapa wymienia 400 adresów, a Search Console wykryła 30, to nie jest problem z rankowaniem i żadna ilość pracy nad treścią go nie zamknie.

Otwórzcie sam plik mapy w przeglądarce i spójrzcie na pojedynczy wpis. Jeśli nie ma tam linii `<lastmod>`, znaleźliście przyczynę. Jeśli jest, ale każdy adres ma ten sam znacznik czasu, znaleźliście inną odmianę tego samego problemu.

## Jak naprawić mapę witryny bez lastmod

Zmiana jest niewielka i mieści się w tym, co generuje mapę.

Wystawiajcie prawdziwy `lastmod` dla każdego adresu, wzięty z momentu, w którym treść tej strony faktycznie się zmieniła: w headless CMS to znacznik aktualizacji samego dokumentu, na stronie plikowej — czas modyfikacji pliku. To musi być wartość per adres. Jeden znacznik czasu skopiowany na 400 wpisów to właśnie awaria „wszystko zmieniło się dzisiaj".

Usuńcie `changefreq` i `priority`. Nic nie robią, a ich usunięcie daje następnej osobie jasny sygnał, że mapa nie opiera się na ozdobach.

Sprawdźcie, co z tym plikiem robi wasz CDN. Mapa witryny serwowana z cache o długim TTL potrafi zestarzeć się na brzegu sieci, podczas gdy origin produkuje poprawne daty. Krótki `s-maxage` z `stale-while-revalidate` utrzymuje ją tanio i aktualnie.

Potem zgłoście mapę ponownie w Search Console. Samo ponowne zgłoszenie nic nie daje, jeśli plik się nie zmienił — działa dopiero połączenie pliku, który teraz niesie sygnały zmian, z prośbą o ponowny odczyt.

## Co zmieniła naprawa lastmod: wykryte strony wzrosły z 27 do 415

Na opisywanej witrynie mapa została wdrożona ponownie, z `lastmod` per adres wyliczonym z realnego czasu aktualizacji każdego dokumentu, i zgłoszona na nowo. Liczba wykrytych stron wzrosła z 27 do 415 — czyli objęła całą mapę.

I to jest uczciwy zasięg tej zmiany, przy czym rozróżnienie waży tu więcej niż sama liczba. Wykrycie to zgoda Google, żeby spojrzeć. Indeksacja to decyzja, że strona jest warta przechowania, a rankowanie to jeszcze osobne pytanie. Strona, która przeszła z „nieznanej" do „wykrytej", stała się uprawniona do oceny; nie została oceniona dobrze.

W praktyce część tych stron zostanie przeskanowana i odrzucona — status „przeskanowana, obecnie niezindeksowana" (Crawled – currently not indexed) — a to nie ma już nic wspólnego z mapą witryny. Decyduje o tym, czy strona zasługuje na miejsce: czy cokolwiek do niej linkuje, czy mówi coś, czego w indeksie jeszcze nie ma, czy witryna ma na tyle mocną pozycję, żeby wybaczono jej cienkie podstrony.

## Problemy, których naprawa mapy witryny nie rozwiązuje

Nie naprawi strony, do której nikt nie linkuje. Nie naprawi strony, która dubluje inną stronę na tej samej witrynie. Nie naprawi witryny bez zewnętrznych odniesień, a to jest ograniczenie leżące pod problemami z indeksacją większości małych serwisów i jedyne, do którego żadna zmiana techniczna nie sięga.

Naprawia natomiast awarię konkretną, niewidoczną i całkowicie mechaniczną: strony, które nigdy nie były w grze, bo plik je ogłaszający przestał być czytany. To warte dziesięciu minut sprawdzenia, bo w odróżnieniu od większości pracy w SEO wynik jest tu zero-jedynkowy i natychmiastowy — albo Google ma wasze adresy, albo nie, a raport map witryn powie wam to w ciągu kilku dni.

Jeśli liczba wykrytych stron jest znacznie niższa od liczby zgłoszonych adresów, zacznijcie od tego, zanim napiszecie cokolwiek nowego. Nie ma sensu dokładać do listy, której nikt nie otwiera.
