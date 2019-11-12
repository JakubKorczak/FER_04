# Zadanie


 Przy rozwiązywaniu tego zadania pamiętajcie, aby teksty wypisywane w elementach ```error-message``` i ```success-message``` były identyczne jak w treści zadania.

 Na stronie znajduje się formularz, który odsyła do strony ```http://api.coderslab.pl/showpost.php```.
 Napisz walidację tego formularza w taki sposób, żeby wysyłany był tylko i wyłącznie wtedy, kiedy spełnione zostaną następujące warunki:

 1. Email zawiera w sobie @.
 - Jeżeli warunek nie jest spełniony, wypiszcie w polu ```error-message``` informację: **Email musi posiadać znak @**,
 2. Imię jest dłuższe niż 6 znaków.
 - Jeżeli warunek nie jest spełniony, wypiszcie w polu ```error-message``` informację: **Twoje imię jest za krótkie**,
 3. Nazwisko jest dłuższe niż 6 znaków.
 - Jeżeli warunek nie jest spełniony, wypiszcie w polu ```error-message``` informację: **Twoje nazwisko jest za krótkie**,
 4. Hasło i hasło drugie są identyczne, ale nie puste.
 - Jeżeli warunek nie jest spełniony, wypiszcie w polu ```error-message``` informację: **Hasła nie są takie same lub puste**,
 5. Checkbox musi być zaznaczony.
 - Jeżeli warunek nie jest spełniony, wypiszcie w polu ```error-message``` informację: **Musisz zaakceptować warunki**.

 Zauważcie, jak dane wyświetlane są na stronie docelowej (jak ich nazwy są skorelowane z kodem HTML).
 Spróbujcie pozmieniać atrybuty ```name``` i zobaczcie, jak się zmieniają wysyłane dane (np. sprawdźcie, co się stanie, jak dwa inputy mają taką samą nazwę).
 Jest to bardzo ważne, ponieważ w taki sposób aplikacja zazwyczaj porozumiewa się z backendem.

