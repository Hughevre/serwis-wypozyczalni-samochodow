import img01 from "../images/blog/blog-general.jpg";

const blogData = [
  {
    id: 1,
    title: "O technologiach użytych do zbudowania niniejszej strony",
    author: "Hubert Zajączkowski",
    date: "14 kwietnia 2023",
    imgUrl: img01,
    description:
      `Niniejsza strona została zbudwana przy wykorzystaniu otwarto-źródłowej biblioteki React.js. Jest ona darmowym narzędziem pozwalającym na tworzenie
       ineraktywnych witryn internetowych w języku Javascript i w oparciu o tzw. komponenty. React.js wykorzystuje mechanizmy virtualDOM oraz virtual dom
       diffing. Oznacza to w praktyce, że wszystkie zmiany w strukturze DOM są w pierwszej kolejności wykonywane w silniku Javascript, a jeżeli zajdzie
       potrzeba wyrenderowania komponentu na nowo, przekazana zostanie odpowiednia informacja do drzewa DOM.
       Poza biblioteką React.js wykorzystano także język HTML5 oraz kaskadowe arkusze stylów CSS3. Arkusze CSS3 zastosowano zarówno w formie oddzielnych
       plików stylu dla każdego elementu witryny, jak i poprzez bibliotekę Bootstrap. Bootstrap to gotowy szkielet do budowania wizualnej części stron
       internetowych. Motywacją do zastosowania tej biblioteki była nie tylko chęć zwiększenia wydajności i responsywności strony, ale także rozwiązanie
       problemów krzyżowej kompatybilności pomiędzy najpopularniejszymi przeglądarkami.
       
       Struktura prezentowanej witryny składa się z trzech elementów: części nagłówkowej, części zasadniczej oraz stopki. W części nagłówkowej zawarto
       przede wszystkim przyciski do logowania się/rejestracji użytkownika, a także menu z przyciskami prowadzącymi do poszczególnych podstron. Taki 
       sposób nawigacji wydaje się najbardziej intuicyjny, biorąc pod uwagę charakter treści prezentowanych na stronie oraz jej przeznaczenie - obsługę
       klientów przedsiębiorstwa, którzy zazwyczaj chcą w krótkim czasie zarezerwować jeden z modeli samochodów dostępnych w ofercie. W stopce z kolei
       przewidziano miejsce, w ślad za wieloma popularnymi witrynami dostępnymi w sieci Internet, dla informacji kontaktowych oraz sekcji na skróty.
       Jeśli z pewnych względów użytkownik straci orientację poruszając się po prezentowanej stronie, zawsze może skorzystać z wyjścia awaryjnego,
       jakim są odnośniki do poszczególnych podstron w sekcji w sekcji na skróty.
       
       Strona została także zoptymalizowana pod kątem dostępności dla osób niepełnosprawnych - elementy nawigacyjne interfejsu są wyraźne, 
       brak także rażących kolorystycznie treści, szata graficzna została utrzymana w stonowanych odcieniach. Podczas projektowania strony wzięto
       pod uwagę zalecenia zawarte w poniżzym dokumencie: https://www.power.gov.pl/media/13588/Dostepnosc-serwisow-internetowych-Dominik-Paszkiewicz-Jakub-Debski.pdf`,
    quote:
      "",
  }
];

export default blogData;