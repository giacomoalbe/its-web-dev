# Laravel Vue Authentication

## Backend

1. Creare un nuovo progetto Laravel o usare uno esistente. **Importante**: usare almeno la versione 6 di Laravel, per avere Sanctum già installato
1. Deve essere presente un database e una tabella users, con all'interno i campi `email` e `password`, necessari per l'autenticazione.
1. Sanctum dovrebbe essere installato di default, quindi è solamente necessario configurare alcuni suoi paramentri
 1. Modificare il `SESSION_DRIVER`
  `SESSION_DRIVER=cookie`
 1. Aggiungere il dominio che si intende usare per il client nel file .env, indicando anche la porta
  `SANCTUM_STATEFUL_DOMAINS=localhost:<port>`
 1. Aggiungere le route di Sanctum all'interno del file `config/cors.php`, includendo le route che verranno usate per l'autenticazione 
 ```
    'paths' => [
        'api/*',
        'sanctum/csrf-cookie'
    ],
  ```
  1. Impostare `supports_credentials` a `true`, sempre in `config/cors.php` 
  1. Nel file `app/Http/Kernel.php`, nei middlewareGroups di api, decommentare il middleware di Sanctum, in modo che venga inserito nella catena di gestione delle richieste:
  ```
        'api' => [
            \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
            'throttle:api',
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ],
   ```
1. Una volta configurato Sanctum, lato backend è solamente necessario creare un `LoginController` con i metodi login, logout e me e agganciare questi metodi alle corrispondenti routes che verranno consumate dal client per la fase di autenticazione

## Frontend

1. Le istruzioni presenti a [questo](https://blog.codecourse.com/setting-up-laravel-sanctum-airlock-for-spa-authentication-with-vue/) sono sufficienti per settare il progetto nel modo corretto. 
 Attenzione a far corrispondere gli url del frontend con gli endpoint del backend 
1. Unica aggiunta fatta al progetto, è quella dell'`interceptor` delle response di Axios, che si trova nel file `main.js`.
 Un interceptor è una funzione che viene eseguita su ogni richiesta o risposta scambiata con il server.
 Questo in particolare serve per mandare al login quando la risposta del server è 401, ovvero `unauthorized`, ed è quindi necessario procedere ad un nuovo login.
