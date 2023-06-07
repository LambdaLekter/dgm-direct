# Guida per l'API di DGM Direct

---------

## Operazioni con gli utenti

* ### Inserire un nuovo utente
    Method: POST \
    URL: _host_ / users / addUser \
    body: { \
    "username"  : "...", \
    "password"  : "...", \
    "firstName" : "...", \
    "lastName"  : "..." \
    }

* ### Aggiungere un amico alla lista di un utente
    Method: POST \
    URL: _host_ / users / addFriend \
    body: { \
    "username": "...", \
    "newFriend": "..." \
    }

* ### Estrarre le informazioni di un utente a partire dal suo username
    Method: POST \
    URL: _host_ / users / :username \
    body: null

---

## Operazioni con i messaggi

* ### Aggiungere un nuovo messaggio
    Method: POST \
    URL: _host_ / messages / addMessage \
    body: { \
    "author"  : "...", \
    "receiver"  : "...", \
    "text" : "...", \
    "time"  : "..." \
    }

* ### Estrarre una chat (lista di messaggi) a partire dagli username di mittente e destinatario
    Method: POST \
    URL: _host_ / messages / :author / :receiver \
    body: null