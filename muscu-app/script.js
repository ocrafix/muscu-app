  // Demande la permission pour les notifications
  if ('Notification' in window && Notification.permission !== "granted") {
    Notification.requestPermission().then(permission => {
      console.log("Permission pour les notifications :", permission);
    });
  }

function programmerNotificationParJour(titre, corps, heureCible, joursAutorises) {
  const maintenant = new Date();
  const jourActuel = maintenant.getDay(); // 0 = dimanche, 1 = lundi, ..., 6 = samedi

  if (joursAutorises.includes(jourActuel)) {
    const heureNotif = new Date();
    heureNotif.setHours(heureCible.hours, heureCible.minutes, 0, 0);

    const delai = heureNotif - maintenant;

    if (delai > 0 && Notification.permission === "granted") {
      setTimeout(() => {
        new Notification(titre, { body: corps, icon: "icon.png" });
      }, delai);
    }
  }
}

// Planning des notifications
function planifierToutesLesNotifications() {
  // lundi
  programmerNotificationParJour("Entraînement du matin", "Haut du corps 💪", { hours: 11, minutes: 0 }, [1]);
  programmerNotificationParJour("Cardio du midi", "Séance cardio 🏃", { hours: 14, minutes: 0 }, [1]);

  // mardi
  programmerNotificationParJour("Vélo du matin", "Petite sortie vélo 🚴", { hours: 11, minutes: 0 }, [2]);
  programmerNotificationParJour("Bas du corps", "Séance jambes + fessiers 🦵", { hours: 14, minutes: 0 }, [2]);

  // mercredi
  programmerNotificationParJour("Tronc complet", "Abdos + Dos ce matin 🧘", { hours: 11, minutes: 0 }, [3]);
  programmerNotificationParJour("Course du soir", "Va courir un peu ce soir 🏃‍♂️", { hours: 22, minutes: 0 }, [3]);

  // jeudi
  programmerNotificationParJour("Vélo du matin", "En selle pour un tour 🚲", { hours: 11, minutes: 0 }, [4]);
  programmerNotificationParJour("Cardio", "Cardio rapide ce midi 🫀", { hours: 14, minutes: 0 }, [4]);

  // vendredi
  programmerNotificationParJour("Haut du corps", "Nouvelle séance bras + pecs 💪", { hours: 11, minutes: 0 }, [5]);
  programmerNotificationParJour("Tronc complet", "Dos + abdos, c'est parti 🧘‍♂️", { hours: 14, minutes: 0 }, [5]);

  // samedi
  programmerNotificationParJour("Sortie vélo", "Ta sortie longue du week-end 🚵", { hours: 11, minutes: 0 }, [6]);

  // dimanche
  programmerNotificationParJour("Repos actif", "Etirements doux ou mobilité 🧘‍♀️", { hours: 11, minutes: 0 }, [0]);
}

planifierToutesLesNotifications();


