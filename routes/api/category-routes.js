const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll().then((categoryData) => {
    res.json(categoryData);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne(
    {
  where: {
    id: req.params.id
  },
}
).then((categoryData) => {
  res.json(categoryData);
});
});

router.post('/', (req, res) => {
// create a new category
Category.create(
  req.body
).then(() => {
  res.send('Post Success!');
});
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
  // All the fields you can update and the data attached to the request body.
  id: req.body.id,
  category_name: req.body.category_name,
},
{
  where: {
    id: req.params.id,
  },
}
)
.then((updatedCategory) => {
  // Sends the updated category as a json response
  res.json(updatedCategory);
})
.catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deleteCategory) => {
      res.json(deleteCategory);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
