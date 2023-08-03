const daysGR = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'];

const monthsGR = ['Ιαν', 'Φεβ', 'Μάρ', 'Απρ', 'Μάι', 'Ιουν', 'Ιουλ', 'Αύγ', 'Σεπ', 'Οκτ', 'Νοέ', 'Δεκ'];

window.addEventListener('DOMContentLoaded', function() {

    /*
     * Set interval to print Greek date
     */
    setInterval(printGRDate, 1000);

    /*
     * onclick event on insert btn
     */
    document.querySelector('.btn').addEventListener('click', function() {
        insertNote();
        reset();
    });

    /*
     * on-keydown / on-keyup 
     */
    document.querySelector('#noteText').addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            insertNote();
            reset();
        }
    });

    function printGRDate() {
        const currentDate = new Date();
        const day = currentDate.getDay();
        const date = currentDate.getDate();
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds();

        let formattedDay = daysGR[day];
        let formattedMonth = monthsGR[month];

        let formattedDate = `${formattedDay}, ${date} ${formattedMonth} ${year}`;

        let formattedTime = `${(hours < 10) ? '0' : ''}${hours}
                                :${(minutes < 10) ? '0' : ''}${minutes}
                                :${(seconds < 10) ? '0' : '' }${seconds} `;

        document.querySelector('.header').innerHTML = formattedDate + '<br>' + formattedTime;
    }

    function insertNote() {
        const noteText = document.querySelector('#noteText').value.trim();
        if (!noteText) {
            return;
        }

        let clone = document.querySelector('.row.hidden').cloneNode(true);
        clone.classList.remove('hidden');

        clone.querySelector('input').addEventListener('click', function() {
            strikeThrough(clone.querySelector('label'));
        });

        clone.querySelector('button').addEventListener('click', function() {
            deleteNote(clone);
        });

        clone.querySelector('label').innerHTML = noteText;
        document.querySelector('.main').appendChild(clone);
    }

    function strikeThrough(lbl) {
        lbl.classList.toggle('line-through');
    }

    function deleteNote(note) {
        note.remove();
    }

    function reset() {
        document.querySelector('#noteText').value = '';
    }
});
