# Guida per l'API di DGM Direct

---------

## Operazioni con gli utenti

* ### Inserire un nuovo utente
    Method: POST \
    URL: _host_ / users / addUser \
    body: { \
    "firstName" : "...", \
    "lastName"  : "...", \
    "username"  : "...", \
    "email"     : "...", \
    "password"  : "..." \
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
    "author"  : [_ObjectID_], \
    "receiver"  : [_ObjectID_], \
    "text" : "...", \
    "time"  : [_Date_] \
    }

* ### Estrarre una chat (lista di messaggi) a partire dagli username di mittente e destinatario
    Method: POST \
    URL: _host_ / messages / :user1 / :user2 \
    body: null \
    ( _user1_ e _user2_ sono gli username degli utenti
    fra cui avviene la comunicazione )