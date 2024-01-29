const arrayLength = 25;

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const COMMENT_AUTHOR = ['Артём', 'Ирина', 'Максим', 'Ольга', 'Сергей', 'Екатерина'];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function getRandomArrayElement (elements) {
  return elements[getRandomInteger(0, elements.length - 1)];
}

function createGenerator () {
  let lastGeneratedId = 0;
  return function () {
    lastGeneratedId++;

    const photo = {
      id: lastGeneratedId,
      url: `photos/${lastGeneratedId}.jpg`,
      description: `Описание фотографии ${lastGeneratedId}`,
      likes: getRandomInteger(15, 200),
      comments: []
    };

    const numComments = getRandomInteger(0, 30);

    for (let i = 1; i <= numComments; i++) {
      const comment = {
        id: i,
        avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
        message: getRandomArrayElement(MESSAGE),
        name: getRandomArrayElement(COMMENT_AUTHOR)
      };
      photo.comments.push(comment);
    }

    return photo;
  };
}

const generatePhoto = createGenerator();
const generatedPhotos = Array.from({ length: arrayLength }, () => generatePhoto());
