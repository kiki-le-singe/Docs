<% _.each(items, function (item, i) { %>
  <li>
    <a href="#/articles/<%= item_main_menu_id %>/<%= item.id %>" class="item-<%= item.title %> sub-item">
      <%= item.title %>
    </a>
  </li>
<% }); %>
