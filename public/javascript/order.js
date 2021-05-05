async function orderFormHandler(event) {
  event.preventDefault();

  const item = document.querySelector('textarea[name="comment-body"]').value.trim();
  const pick_up_street = document.querySelector('#pick_up_street').value.trim();
  const pick_up_city = document.querySelector('#pick_up_city').value.trim();
  const pick_up_state = document.querySelector('#pick_up_state').value;
  const pick_up_zip = document.querySelector('#pick_up_zip').value.trim();
  const drop_off_street = document.querySelector('#drop_off_street').value.trim();
  const drop_off_city = document.querySelector('#drop_off_city').value.trim();
  const drop_off_state = document.querySelector('#drop_off_state').value;
  const drop_off_zip = document.querySelector('#drop_off_zip').value.trim();

  // const driver_id = window.location.toString().split('/')[
  //   window.location.toString().split('/').length - 1
  // ];

  if (item && pick_up_street && pick_up_city && pick_up_state && pick_up_zip && drop_off_street && drop_off_city && drop_off_state && drop_off_zip) {
    const response = await fetch('/api/packages', {
      method: 'post',
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
      document.location.replace('/clients/2');
    } else {
      alert(response.statusText);
    }
  }
}

const form = document.querySelector('.pickup-form');
form.addEventListener('submit', orderFormHandler);
