async function orderFormHandler(event) {
  event.preventDefault();

  const item = document.querySelector('textarea[name="comment-body"]').value.trim();
  const pick_up_street = document.querySelector('#pick_up_street').value.trim();
  const pick_up_city = document.querySelector('#pick_up_city').value.trim();
  const pick_up_state = document.querySelector('#pick_up_state').value.trim();
  const pick_up_zip = document.querySelector('#pick_up_zip').value.trim();
  const drop_off_street = document.querySelector('#drop_off_street').value.trim();
  const drop_off_city = document.querySelector('#drop_off_city').value.trim();
  const drop_off_state = document.querySelector('#drop_off_state').value.trim();
  const drop_off_zip = document.querySelector('#drop_off_zip').value.trim();

  // const driver_id = window.location.toString().split('/')[
  //   window.location.toString().split('/').length - 1
  // ];

  if (order_text) {
    const response = await fetch('/api/packages', {
      method: 'POST',
      body: JSON.stringify({
        item,
        pick_up_street,
        pick_up_city,
        pick_up_state,
        pick_up_zip,
        drop_off_street,
        drop_off_city,
        drop_off_state,
        drop_off_zip

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