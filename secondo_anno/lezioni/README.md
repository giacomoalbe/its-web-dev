Passaggi per creare un bel progetto Web di Vue JS

1. Creare il progetto con vue create <nome progetto>
1. Installare pacchetti senza configurazione (aka buona la prima): axios
1. Installare json-server & creare i propri dati all’interno del file db.json
1. Installare vue-router
1. Configurare VueRouter nella seguente maniera:
   1. Importare pacchetto 
   1. Vue.use(VueRouter)
   1. Creare array delle routes
   1. Istanziare oggetto router  (new VueRouter()) con mode:history
   1. Inserire router dentro a istanza di Vue
   1. Inserire dentro App.vue l’elemento html router-view
   1. [Opzionale, ma raccomandato] Installare TailwindCSS - Ricordiamo di installare la build quella con PostCSS 7!
1. Configurare Tailwind:
   1. Inserire le dichiarazoni @tailwind in app/css/style.css
   1. Creare file postcss.config.js (nella root) con contenuto da documentazione Tailwind
   1. Creare file tailwindcss.config.js (nella root) con contenuto da documentazione Tailwind
   1. Importare app/css/style.css dentro main.js
1. Facciamo il primo npm run serve / yarn serve per installare i pacchetti e vedere se tutto funzia
1. Far partire json-server, o come script in package json o come processo separato di bash se installato globalmente (consigliato)
1. Creare componenti per applicazione:
   1. Lista
   1. Dettaglio
   1. Creazione/Modifica
   1. Navigazione (da inserire in App, prima del router-view)
1. Componente Lista: 
   1. importare axios
   1. usare async/await per recuperare risorsa principale del sito (con isLoading e spinner)
   1. Nel template mostrare lista delle risorse.
   1. [Opzionale ma consigliato] Creare un componente specifico per il template della lista
   1. [Opzionale ma consigliato] Aggiungere ricerca nella lista e ordinamento attraverso una computed sulla risorsa principale
1. Componente Dettaglio:
   1. importare axios
   1. usare async/await per recuperare la risorsa legata all’id presente nell’URL
   1. Per recuperare l’ID, usiamo i params della $route (ovvero della “vista” corrente)
   1. Nel template mostriamo i dettagli in modo più esteso rispetto alla lista e renderemo disponibili i pulsanti Modifica e Cancella
   1. Aggiungere pulsante o link per tornare alla lista delle Risorse
   1. Click sul pulsante Modifica, manda alla route di modifica, indicando l’ID della risorsa nell’URL di modifica
   1. Click sul pulsante “Cancella” richiede all’utente conferma della cancellazione (basta un confirm()). Se il risultato fosse positivo, esegue una chiamata HTTP di tipo DELETE (con axios) a seguito della quale, con il $router rimanda alla lista delle risorse, dove non sarà più presente la risorsa che avremo cancellato.
1. Componente Creazione/Modifica:
   1. importare axios
   1. Verificare se siamo in modalità creazione o modifica. Nel primo caso i campi saranno vuoti, nel secondo caso prima recuperiamo la risorsa associata all’ID presente sull’URL e poi prepopoliamo i campi con quelli provenienti da database
   1. Nel template mostrare tutti gli input legati alle caratteristiche della risorsa (ogni “chiave” della risorsa avrà il suo input corrispondente)
   1. [Opzionale ma consigliato] Inserire i campi che si vogliono modificare all’interno di un array, che definisca per ognuno:
      1. Una label
      1. Un tipo di input
      1. Il nome della chiave della risorsa che si vuole modificare
      1. [Opzionale] I validatori (in una fase iniziale basta il “required”) - da mostrare nella vista di fianco all’input
   1. Aggiungere il pulsante Crea/Salva, che deve risultare cliccabile solo se la form è valida
   1. Aggiungere una computed/metodo che stabilisca sulla base dei criteri che intendiamo controllare sulla risorsa se la form sia completa e quindi valida
   1. Aggiungere pulsante Torna Indietro
   1. Una volta verificato che la form sia valida, associare al click del pulsante una chiamata HTTP con axios di tipo POST, se in creazione, oppure PUT se in modifica. In quest’ultimo caso dovremo inserire nell’URL della chiamata anche l’ID della risorsa da modificare. 
   1. Una volta che la chiamata avesse esito positivo, con il $router tornerò alla lista delle risorse
1. Componente Navigazione
   1. Definiamo una lista di links che vogliamo siano presenti nella nostra navigazione. Ogni link avrà 2 caratteristiche: 
      1. Label: testo che viene visualizzato nella vista
      1. Code: nome della route a cui vogliamo mandare con il click su questo pulsante
   1. Aggiungere un metodo che viene associato al click sul pulsante che usa il router per andare nella route il cui nome è il valore della proprietà code dell’oggetto link su cui abbiamo appena cliccato
   1. In base al nome della route corrente (che è contenuto all’interno della variabile $route.matched[0].name), aggiungere ai pulsanti una classe per diversificare i link il cui valore di code sia uguale al nome della route corrente. Altrimenti segnare come “non selezionato”
