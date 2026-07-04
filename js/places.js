document.addEventListener('DOMContentLoaded', () => {
  const _base = window.location.pathname.includes('/pages/') ? '../' : '';
  const places = [
    {
      id: 1, name: 'Gajapati Palace',
      description: 'Maharaja Krushnachandra Gajapati, the erstwhile ruler of Paralakhemundi State near Andhra – Odisha border was among of the greatest luminaries of Odisha throughout her history. A visionary and passionate soul for art and heritage, Maharaja Krushnachandra Gajapati was one of the first Odias to initiate the movement for separate statehood for the Odia speaking people. The seeds for such a noble initiative were germinated in the Gajapati Palace of Paralakhemundi. Today, the palace though degraded with the ravage of time still stands as an architectural splendour of the colonial past.',
      distance: '8.8 KM',
      mapLink: 'https://www.google.com/maps/place/Gajapati+Palace,+Q3HP%2B4WX+Palace+St,+Paralakhemundi,+Odisha+761200,+India/@18.77827,84.08171,17z',
      wikiLink: 'https://en.wikipedia.org/wiki/Gajapati_Palace',
      image: _base + 'assets/places/gajapati.png',
      location: 'Paralakhemundi Town',
    },
    {
      id: 2, name: 'Gandahati Waterfall',
      description: "The Gandahati waterfall is a well-liked natural landmark. It is a popular tourist destination in Odisha's Gajapati District that sees a lot of traffic in the winter. This waterfall is well-known for its sparkling cascade, which flows consistently and year-round. Visitors from all surrounding places have been drawn to it by its beautiful charm amidst the forest cover. The waterfall is situated on the Mahendratanaya river, approximately 30 km from Paralakhemundi.",
      distance: '19.6 KM',
      mapLink: 'https://www.google.com/maps/place/Gandahati+Waterfall,+Gajapati+District,+Odisha,+India/@18.8893,84.2701,15z',
      wikiLink: 'https://en.wikipedia.org/wiki/Gandahati_waterfall',
      image: _base + 'assets/places/waterfall.png',
      location: 'Gajapati District',
    },
    {
      id: 3, name: 'Mahendragiri',
      description: 'Mahendragiri, located in Gajapati district, is a renowned tourist and religious site in eastern Odisha. This peak, part of the Eastern Ghats, rises to 1,501 meters (4,976 ft) above sea level. According to Hindu mythology, Lord Parshuram meditated on Mahendragiri and received the divine Parsu (double axe) from Lord Shiva. It is also believed to be the mountain from which Lord Hanuman fetched the Sanjeevani herb.',
      distance: '50.2 KM',
      mapLink: 'https://www.google.com/maps/place/Mahendragiri,+Odisha,+India/@18.9665,84.3649,13z',
      wikiLink: 'https://en.wikipedia.org/wiki/Mahendragiri_(Odisha)',
      image: _base + 'assets/places/Mahendragiri.png',
      location: 'Eastern Ghats',
    },
    {
      id: 4, name: 'Padmasambhava Mahavihara Monastery',
      description: 'The Padmasambhava Mahavihara monastery at Chandragiri, near Mohana of Gajapati District of Odisha is the largest Buddhist Monastery in South Asia. It is named after Acharya Padmasambhava, an Odisha born monk who spread Buddhism in Tibet in 7th century. There are around 200 monks residing here. It is a beautiful religious and peaceful place to visit in Gajapati district, Odisha.',
      distance: '73 KM',
      mapLink: 'https://www.google.com/maps/place/Padmasambhava+Mahavihara+Monastery,+Jirang,+Odisha,+India/@19.2734,84.2634,15z',
      wikiLink: 'https://en.wikipedia.org/wiki/Padmasambhava_Mahavihara_monastery',
      image: _base + 'assets/places/Mahavihara.png',
      location: 'Chandragiri, near Mohana',
    },
    {
      id: 5, name: 'Taptapani',
      description: 'Taptapani is famous for its hot sulfur water spring. The name "Taptapani" also suggests that. "Tapta" means hot and "pani" means water. The hot water from the natural spring of Taptapani are attributed with medicinal properties and can be bathed in at the pond created next to the hot spring. The hot spring is situated at the eastern slope of the eastern ghat at a crest of the hill within the lush green forest having wide range of flora and fauna.',
      distance: '77.9 KM',
      mapLink: 'https://www.google.com/maps/place/Taptapani+Hot+Spring,+Odisha,+India/@19.3516,84.2349,14z',
      wikiLink: 'https://en.wikipedia.org/wiki/Taptapani',
      image: _base + 'assets/places/taptapani.png',
      location: 'Near Mohana',
    },
  ];

  const grid = document.getElementById('places-grid');
  grid.innerHTML = places.map((place) => `
    <div class="place-card">
      <div class="place-image-container">
        <img src="${place.image}" alt="${place.name}" class="place-image" />
        <div class="place-overlay">
          <span class="place-number">#${place.id}</span>
          <span class="place-category">${place.location}</span>
        </div>
      </div>
      <div class="place-content">
        <h3 class="place-title">${place.name}</h3>
        <p class="place-description">
          ${place.description}
          <a href="${place.wikiLink}" target="_blank" rel="noopener noreferrer" class="place-read-more" title="Read more on Wikipedia">
            Read more <i class="fas fa-arrow-up-right-from-square"></i>
          </a>
        </p>
        <div class="place-footer">
          <div class="place-distance">
            <i class="fas fa-location-dot distance-icon"></i>
            <span>${place.distance} from venue</span>
          </div>
          <a href="${place.mapLink}" target="_blank" rel="noopener noreferrer" class="place-map-link" title="Open in Google Maps">
            <i class="fas fa-location-dot"></i> View on Map
          </a>
        </div>
      </div>
    </div>
  `).join('');
});
