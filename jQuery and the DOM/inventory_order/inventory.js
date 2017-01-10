var inventory;

(function() {
  inventory = {
    last_id: 0,
    collection: [],
    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    },
    // set and add the date
    setDate: function() {
      var date = new Date();
      $('#order_date').text(date.toUTCString());
    },
    // store the template for reuse
    // store the html in a var and remove it from page
    cacheTemplate: function() {
      var $i_tmpl = $('#inventory_item').remove();
      this.template = $i_tmpl.html();
    },
    // method to create new instance of the object and push it into a collection
    add: function() {
      this.last_id++;
      var item = {
        id: this.last_id,
        name: '',
        stock_number: '',
        quantity: 1
      };
      this.collection.push(item);

      return item;
    },
    // method to remove an object from the collection
    // filter - if the elem id is the argument do not add it to the new collection
    remove: function(idx) {
      this.collection = this.collection.filter(function(item) {
        return idx !== item.id;
      });
    },
    // get the current object in the collection
    get: function(id) {
      var found_item;

      this.collection.forEach(function(item) {
        if (item.id === id) {
          found_item = item;
          return false; // exit the loop
        }
      });

      return found_item;
    },
    // method for updating elem properties(name, stock number, quantity)
    update: function($item) {
      var id = this.findID($item),
          item = this.get(id);

      item.name = $item.find('[name^=item_name]').val();
      item.stock_number = $item.find('[name^=item_stock_number]').val();
      item.quantity = $item.find('[name^=item_quantity]').val();
    },
    findID: function($item) {
      return +($item.find('input[type=hidden]').val());
    },
    // replace the ID with the current last_id++ in the template
    // add it to the markup
    newItem: function(e) {
      e.preventDefault();
      var item = this.add(),
      $item = $(this.template.replace(/ID/g, item.id));
      
      $('#inventory').append($item);
    },
    findParent: function(event) {
      return $(event.target).closest('tr');
    },
    // remove an item form markup and from the collection
    deleteItem: function(e) {
      e.preventDefault();
      var $item = this.findParent(e).remove();

      this.remove(remove.findID($item));
    },
    // update the item
    updateItem: function(e) {
      var $item = this.findParent(e);

      this.update($item);
    },
    // bind all the events
    // change the context in the newItem method (to the inventory object)
    bindEvents: function() {
      // add the new item event
      $('#add_item').on('click', $.proxy(this.newItem, this));
      // remove the item event
      $('#inventory').on('click', 'a.delete', $.proxy(this.deleteItem, this));
      // update the obj properties
      $('#inventory').on('blur', ':input', $.proxy(this.updateItem, this));
    }
  };
})();

// change the context from the window to the inventory object
$($.proxy(inventory.init, inventory));
