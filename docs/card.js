$.getJSON('codelabs.json', function (data) {
  let src = data.map(function (i) {
    return `<div
        class="bg-gradient-to-r from-${i.color}-500 to-${i.color}-300 w-80 h-48 sm:w-96 sm:h-56 m-auto rounded-xl shadow-2xl transform hover:scale-110 transition-transform text-white relative">
        <a href="./${i.id}/" target="_brank">
        <div class="w-full px-8 absolute top-6 relative">
          <div class="flex justify-between">
            <div>
              <h2 class="text-lg font-medium">${i.title}</h2>
            </div>
          </div>
          <div class="pt-2">
            <p class="font-light">${i.description}</p>
          </div>
        </div>
        <div class="bottom-6 left-8 absolute">
          <div class="flex">
            <div class="mr-8 sm:mr-12">
              <p class="font-light text-xs">
                Last Updated
              </p>
              <p class="font-bold tracking-more-wider text-sm">
                ${i.date}
              </p>
            </div>
            <div class="mr-8 sm:mr-12">
              <p class="font-light text-xs">
                Time
              </p>
              <p class="font-bold tracking-more-wider text-sm">
                ${i.time} minutes
              </p>
            </div>
            <div>
              <p class="font-light text-xs">
                Author
              </p>
              <p class="font-bold tracking-more-wider text-sm">
                ${i.author}
              </p>
            </div>
          </div>
        </div>
        </a>
      </div>`
  })
    .join('')
  $('#codelabs').append(src)
})
