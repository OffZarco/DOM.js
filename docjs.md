# <center>JavaScript

## Méthodes d'instance : 

1. **addEventListener()** : <br> 
   > La méthode **addEventListener()** de EventTarget attache une fonction à appeler chaque fois que l'évènement spécifié est envoyé à la cible.

    ```` javascript
    const colour = document.getElementById('menu')

    colour.addEventListener('mouseover', function handleMouseOver() {
        colour.style.color= 'red'
    })

    colour.addEventListener('mouseout', function handleMouseOut() {
        colour.style.color= 'black'
    })
    ````

2. **getElementsByTagName** :

    ```` javascript
    const h1 = document.getElementsByTagName('h1')
    console.log(h1[0].innerHTML)
    ````

3. **Récuperer le lien** :

    ```` js
    console.log("URL de la page = " + window.location.href);
    ````

---