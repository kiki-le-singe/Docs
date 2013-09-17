<% _.each(items_sub_menu, function (item, i) { %>
  <li>
    <a href="#/articles/<%= item_main_menu_id %>/<%= item.id %>" class="item-<%= item.id %> sub-item">
      <%= item.title %>
    </a>
  </li>
<% }); %>
