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
  const client_id = document.getElementById("client-id").textContent;
  const deliver_by = document.getElementById("deliver-date").value;

  const user_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (item && pick_up_street && pick_up_city && pick_up_state && pick_up_zip && drop_off_street && drop_off_city && drop_off_state && drop_off_zip && client_id && deliver_by) {
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
        drop_off_zip,
        client_id,
        deliver_by

      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace(`/clients/${client_id}`);
    } else {
      alert(response.statusText);
    }
  }

  // // Initialize all input of type date
  // var calendars = bulmaCalendar.attach('[type="date"]', options);

  // // Loop on each calendar initialized
  // for (var i = 0; i < calendars.length; i++) {
  //   // Add listener to select event
  //   calendars[i].on('select', date => {
  //     console.log(date);
  //   });
  // }

  // // To access to bulmaCalendar instance of an element
  // var element = document.querySelector('#deliver-date');
  // if (element) {
  //   // bulmaCalendar instance is available as element.bulmaCalendar
  //   element.bulmaCalendar.on('select', function (datepicker) {
  //     console.log(datepicker.data.value());
  //   });
  // }

}

function myPackagesHandler(event) {
  event.preventDefault();
  const client_id = document.getElementById("client-id").textContent;
  document.location.replace(`/clients/${client_id}`)
}



const myPackages = document.querySelector('#my-packages');
myPackages.addEventListener('click', myPackagesHandler)

const form = document.querySelector('.pickup-form');
form.addEventListener('submit', orderFormHandler);
console.log(form)
