<script>
    // JavaScript Functionality
    document.querySelectorAll('.dropdown').forEach((tile) => {
      tile.addEventListener('click', function () {
        // Get the background image of the clicked tile
        const bgImage = this.style.backgroundImage;

        // Update the hero background with the clicked tile's background
        const hero = document.querySelector('.hero');
        hero.style.backgroundImage = bgImage;
        hero.style.backgroundSize = 'cover';
        hero.style.backgroundPosition = 'center';

        // Get the name of the country and update the hero text
        const countryName = this.querySelector('.dropdown-title').innerText;
        document.getElementById('hero-title').innerText = countryName;

        // Replace the dropdown tiles with destination details
        const container = document.querySelector('.dropdown-container');
        container.innerHTML = `
          <div class="destination-details">
            <h2>${countryName}</h2>
            <div class="details-content">
              <p>Fee: $275/adult</p>
              <p>Accommodation: Included</p>
              <p>Guided Tours: Yes</p>
              <p>Ratings: ★★★★☆</p>
            </div>
          </div>
        `;

        // Style for the new content
        const details = document.querySelector('.destination-details');
        details.style.textAlign = 'center';
        details.style.padding = '20px';
        details.querySelector('h2').style.marginBottom = '20px';
        details.querySelector('.details-content p').style.margin = '10px 0';
      });
    });
  </script>
  
<a href="https://humorous-chartreuse-holiday.glitch.me" 
   style="font-size: 22px; font-family: Arial, sans-serif; color: #FFFFF0; font-weight: bold; text-decoration: none; padding: 10px 20px; border: 2px solid #FFFFF0; border-radius: 5px; display: inline-block;">
   Go Back
</a>
  
</body>
</html>
