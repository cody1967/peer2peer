async function orderFormHandler(event) {
  event.preventDefault();

  const order_text = document.querySelector('textarea[name="comment-body"]').value.trim();

  // const driver_id = window.location.toString().split('/')[
  //   window.location.toString().split('/').length - 1
  // ];

  if (order_text) {
    const response = await fetch('/api/package', {
      method: 'POST',
      body: JSON.stringify({
        pick_up_street,
        pick_up_city,
        pick_up_state,
        pick_up_zip,
        drop_off_street,
        drop_off_city,
        drop_off_state,
        drop_off_zip,

      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.pickup-form').addEventListener('submit', orderFormHandler);