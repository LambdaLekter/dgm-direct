# Guida per l'API di DGM Direct

---------

## Operazioni con gli utenti

* ### Inserire un nuovo utente
  Method: POST \
  URI: _host_ / api / users / addUser \
  body: { \
  "firstName" : "...", \
  "lastName"  : "...", \
  "username"  : "...", \
  "email"     : "...", \
  "password"  : "..." \
  }

* ### Verifica le credenziali di un utente
  Method: POST \
  URI: _host_ / api / users / login \
  body: { \
  "username": "...", \
  "password": "..." \
  }

* ### Aggiungere un amico alla lista di un utente dati gli username
  Method: POST \
  URI: _host_ / api / users / addFriend \
  body: { \
  "username": "...", \
  "newFriend": "..." \
  }

* ### Rimuovere un amico alla lista di un utente dati gli username
  Method: POST \
  URI: _host_ / api / users / removeFriend \
  body: { \
  "username": "...", \
  "friend": "..." \
  }

* ### Estrarre gli amici di un utente dato il suo username
  Method: POST \
  URI: _host_ / api / users / getFriends / :username \
  body: null

* ### Estrarre le chat attive di un utente dato il suo username
  Method: POST \
  URI: _host_ / api / users / getChats / :username \
  body: null

---

## Operazioni con i messaggi

* ### Aggiungere un nuovo messaggio
  Method: POST \
  URI: _host_ / api / messages / addMessage \
  body: { \
  "author"  : [_ObjectID_], \
  "receiver"  : [_ObjectID_], \
  "text" : "...", \
  "time"  : [_ms_] \
  }

* ### Estrarre una chat fra due utenti dati gli username
  Method: POST \
  URI: _host_ / api / messages / :user1 / :user2 \
  body: null \

* ### Eliminare un messaggio dato il suo identificatore
  Method: POST \
  URI: _host_ / api / messages / deleteMessage \
  body: { \
  "id": "..."
  }
---

## Esempio di richiesta

    const newUser = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: password
    };

    axios.post('http://localhost:3001/api/users/addUser', newUser)
        .then(res => {
            console.log("Utente creato con successo")
            console.log(res.data)
        })
        .catch(error => {
            console.error(error);
        });