let idx = 1;

const changeSlide = (num) => {
  showPhotos((idx += num));
};

const currentSlide = (num) => {
  showPhotos((idx = num));
};

const showPhotos = (num) => {
  const photos = document.getElementsByClassName('slide');
  const dots = document.getElementsByClassName('dot');

  if (num > photos.length) {
    idx = 1;
  }
  if (num < 1) {
    idx = photos.length;
  }

  for (let i = 0; i < photos.length; i++) {
    photos[i].style.display = 'none';
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' dot_active', '');
  }
  photos[idx - 1].style.display = 'block';
  dots[idx - 1].className += ' dot_active';
};

showPhotos(idx);
