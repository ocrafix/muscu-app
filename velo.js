document.addEventListener('DOMContentLoaded', function() {
  // Récupérer tous les boutons "Parcourir ce trajet"
  var boutons = document.querySelectorAll('.open-btn');
  boutons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var url = this.getAttribute('data-url');
      if (url) {
        window.open(url, '_blank');
      }
    });
  });

  // Bouton "Parcours au hasard"
  var randomBtn = document.getElementById('random-route-btn');
  if (randomBtn) {
    randomBtn.addEventListener('click', function() {
      var trajetButtons = Array.from(document.querySelectorAll('.open-btn'));
      if (trajetButtons.length > 0) {
        // Choisir un indice aléatoire
        var index = Math.floor(Math.random() * trajetButtons.length);
        var url = trajetButtons[index].getAttribute('data-url');
        if (url) {
          window.open(url, '_blank');
        }
      }
    });
  }
});