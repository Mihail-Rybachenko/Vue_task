<template>
  <h1>Задание 3</h1>
  <h1>Помидор</h1>
  <h1>|</h1>
  <h1>Задание 4</h1>
  <div>{{ name }}</div>
  <div>{{ surn }}</div>
  <h1>|</h1>
  <h1>Задание 5</h1>
  <a :href="href">{{ text }}</a>
  <h1>|</h1>
  <h1>Задание 6</h1>
  {{ num * num }}<br>
  {{ num1 + num2 + num3 }}
  <h1>|</h1>
  <h1>Задание 7</h1>
  <p>{{ arr[0] }}</p>
  <p>{{ arr[1] }}</p>
  <p>{{ arr[2] }}</p>
  {{ arr1[0] + arr1[1] + arr1[2] }}
  <h1>|</h1>
  <h1>Задание 8</h1>
  {{ obj.x + obj.y + obj.z }}
  <h1>|</h1>
  <h1>Задание 9</h1>
  <button @click="showDate">Показать дату</button>
  <h1>|</h1>
  <h1>Задание 10</h1>
  <button @mouseover="showDate">Наведи курсор</button>
  <h1>|</h1>
  <h1>Задание 11</h1>
  <button @click="showSum">Показать сумму</button>
  <h1>|</h1>
  <h1>Задание 12</h1>
  <button @click="showCurrentDay">Показать текущий день недели</button>
  <h1>|</h1>
  <h1>Задание 13</h1>
  <button @click="showSquare(2)">Квадрат 2</button>
  <button @click="showSquare(3)">Квадрат 3</button>
  <h1>|</h1>
  <h1>Задание 14</h1>
  <p>{{ text1 }}</p>
  <button @click="changeText">Изменить текст</button>
  <button @click="setText('Привет')">Текст 1</button>
  <button @click="setText('Пока!')">Текст 2</button>
  <h1>|</h1>
  <h1>Задание 15</h1>
  <p>Цена за единицу: {{ cost }}</p>
  <p>Количество: {{ amount }}</p>
  <p>Общая стоимость: {{ price }}</p>
  <button @click="changeCost">Изменить цену</button>
  <h1>|</h1>
  <h1>Задание 16</h1>
  <a href="https://youtube.com" @click.prevent="handleClick">Не переходи по ссылке</a><br>
  <button @click.once="handleClick2">Нажми всего 1 раз</button>
  <h1>|</h1>
  <h1>Задание 17</h1>
  <p v-if="visible">Этот абзац отображается, если visible равно true</p>
  <p v-else>Этот абзац отображается, если visible равно false</p>
  <h1>|</h1>
  <h1>Задание 18</h1>
  <p v-if="!hidden18">TEXT</p>
  <h1>|</h1>
  <h1>Задание 19.1</h1>
  <div>
    <button @click="show191">Показать абзац</button>
    <p v-if="visible191">Абзац показан!</p>
  </div>
  <h1>|</h1>
  <h1>Задание 19.2</h1>
  <div>
    <button @click="show192">Показать абзац</button>
    <button @click="hide192">Скрыть абзац</button>
    <p v-if="visible192">Абзац показан!</p>
  </div>
  <h1>|</h1>
  <h1>Задание 19.3</h1>
  <div>
    <button v-if="!visible193" @click="show193">Показать абзац</button>
    <button v-else @click="hide193">Скрыть абзац</button>
    <p v-if="visible193">Абзац показан!</p>
  </div>
  <h1>|</h1>
  <h1>Задание 20</h1>
  <div>
    <button @click="toggle201">Абзац 1</button>
    <p v-if="visible201">Это Абзац 1</p>

    <button @click="toggle202">Абзац 2</button>
    <p v-if="visible202">Это Абзац 2</p>

    <button @click="toggle203">Абзац 3</button>
    <p v-if="visible203">Это Абзац 3</p>
  </div>
  <h1>|</h1>
  <h1>Задание 21</h1>
  <div>
    <!-- Абзац 1 -->
    <button @click="toggle211">
      {{ visible211 ? 'hide' : 'show' }}
    </button>
    <p v-if="visible211">Это абзац 1</p>

    <!-- Абзац 2 -->
    <button @click="toggle212">
      {{ visible212 ? 'hide' : 'show' }}
    </button>
    <p v-if="visible212">Это абзац 2</p>

    <!-- Абзац 3 -->
    <button @click="toggle213">
      {{ visible213 ? 'hide' : 'show' }}
    </button>
    <p v-if="visible213">Это абзац 3</p>
  </div>
  <h1>|</h1>
  <h1>Задание 22</h1>
  <div>
    <p v-if="isAdmin22">У вас есть права администратора</p>
    <p v-else>Вы обычный пользователь</p>
  </div>
  <h1>|</h1>
  <h1>Задание 23</h1>
  <div>
    <p v-if="day23 === 'Понедельник'">Понедельник</p>
    <p v-else-if="day23 === 'Вторник'">Вторник</p>
    <p v-else-if="day23 === 'Среда'">Среда</p>
    <p v-else-if="day23 === 'Четверг'">Четверг</p>
    <p v-else-if="day23 === 'Пятница'">Пятница</p>
    <p v-else-if="day23 === 'Суббота'">Суббота</p>
    <p v-else-if="day23 === 'Воскресенье'">Воскресенье</p>
  </div>
  <h1>|</h1>
  <h1>Задание 24</h1>
  <div>
    <p v-if="age24 < 18">подросток</p>
    <p v-else-if="age24 <= 25">Юноша</p>
    <p v-else>мужчина</p>
  </div>
  <h1>|</h1>
  <h1>Задание 25</h1>
  <div>
    <button @click="hideParagraphs25">Скрыть абзацы</button>
    <template v-if="visible25">
      <p>Абзац 1</p>
      <p>Абзац 2</p>
      <p>Абзац 3</p>
    </template>
  </div>
  <h1>|</h1>
  <h1>Задание 26</h1>
  <div>
    <button @click="toggle26">Тоггл абзаца</button>
    <p v-show="visible26">Этот абзац отображается, если visible === true</p>
  </div>
  <!--Отличия директив v-show а также v-if

    v-if:
        Полностью удаляет или создаёт элемент в DOM в зависимости от условия.
        При изменении условия происходит создание или уничтожение дочерних компонентов и привязок событий.
        Подходит для условий, которые редко меняются, поскольку операция создания/уничтожения может быть затратной.

    v-show:
        Элемент всегда присутствует в DOM, а управление его видимостью осуществляется через CSS (свойство display: none).
        Переключение видимости происходит быстрее, так как DOM не пересоздаётся.
        Не поддерживает конструкции v-else и не может применяться к тегу <template>.
        №3: Когда использовать v-show, а когда v-if

    v-if используется, если:
        Условие изменяется нечасто.
        Вам важно, чтобы при отсутствии условия элемент полностью не присутствовал в DOM (например, для экономии ресурсов или корректной работы дочерних компонентов).

    v-show используется, если:
        Переключения видимости происходят часто.
        Элемент должен оставаться в DOM, и вам важна быстрота переключения, поскольку изменение свойства display происходит мгновенно.

        Ограничения директивы v-show

    Не поддерживает конструкцию v-else:
    Вы не можете использовать v-show вместе с v-else или v-else-if, так как v-show просто меняет CSS-стиль, а не управляет созданием/уничтожением элементов.

    Нельзя применять к элементу template:
    Директива v-show должна применяться непосредственно к реальным DOM-элементам, а не к обёрткам типа <template>.

    Всегда рендерит элемент:
    Даже если элемент скрыт (display: none), он остаётся в DOM, что может быть нежелательно в случаях, когда необходимо полностью убрать элемент из структуры страницы для оптимизации.
    -->
  <h1>|</h1>
  <h1>Задание 27.1</h1>
  <div>
    <div v-for="item in items271" :key="item">{{ item }}</div>
  </div>
  <h1>|</h1>
  <h1>Задание 27.2</h1>
  <div>
    <div v-for="item in items272" :key="item">{{ item * item }}</div>
  </div>
  <h1>|</h1>
  <h1>Задание 27.3</h1>
  <ul>
    <li v-for="item in items273" :key="item">{{ item }}</li>
  </ul>
  <h1>|</h1>
  <h1>Задание 28</h1>
  <ul>
    <li v-for="(elem, key) in arr28" :key="key">
      {{ key }}
    </li>
  </ul>
  <h1>|</h1>
  <h1>Задание 29.1</h1>
  <ul>
    <li v-for="(value, key) in obj291" :key="key">{{ value }}</li>
  </ul>
  <h1>|</h1>
  <h1>Задание 29.2</h1>
  <ul>
    <li v-for="(value, key) in obj292" :key="key">
      {{ key }} - {{ value }}
    </li>
  </ul>
  <h1>|</h1>
  <h1>Задание 29.3</h1>
  <ul>
    <li v-for="(value, key, index) in obj293" :key="key">
      {{ key }} - {{ value }} - {{ index }}
    </li>
  </ul>
  <h1>|</h1>
  <h1>Задание 29.4</h1>
  <ul>
    <li v-for="(value, key, index) in obj294" :key="key">
      {{ key }} - {{ value }} - {{ index + 1 }}
    </li>
  </ul>
  <h1>|</h1>
  <h1>Задание 30.1</h1>
  <div v-for="item in items301" :key="item">
    <p>{{ item }}</p>
    <p class="divider"></p>
  </div>
  <h1>|</h1>
  <h1>Задание 30.2</h1>
  <ul>
    <template v-for="(item, index) in items302" :key="index">
      <li>{{ item }}</li>
      <li class="divider"></li>
    </template>
  </ul>
  <h1>|</h1>
  <h1>Задание 31.1</h1>
  <ul>
    <li v-for="(item, index) in hrefs311" :key="index">
      <a :href="item.href">{{ item.text }}</a>
    </li>
  </ul>
  <h1>|</h1>
  <h1>Задание 31.2</h1>
  <table>
    <tr v-for="(product, index) in products312" :key="index">
      <td>{{ product.name }}</td>
      <td>{{ product.price }}</td>
      <td>{{ product.quantity }}</td>
    </tr>
  </table>
  <h1>|</h1>
  <h1>Задание 32</h1>
  <div>
    <p v-for="num in 30" :key="num">{{ num }}</p>
  </div>
  <h1>|</h1>
  <h1>Задание 33</h1>
  <ul>
    <template v-for="(elem, index) in items33" :key="index">
      <li v-if="elem > 0">{{ elem }}</li>
    </template>
  </ul>
  <h1>|</h1>
  <h1>Задание 34</h1>
  <ul>
    <li v-for="product in products34" :key="product.id">
      {{ product.name }}
    </li>
  </ul>
  <h1>|</h1>
  <h1>Задание 35.1</h1>
  <div>
    <ul>
      <li v-for="(item, index) in items351" :key="index">{{ item }}</li>
    </ul>
    <button @click="addItem351">Добавить элемент</button>
  </div>
  <h1>|</h1>
  <h1>Задание 35.2</h1>
  <div>
    <ul>
      <li v-for="(item, index) in items352" :key="index">{{ item }}</li>
    </ul>
    <button @click="removeFirstItem352">Удалить первый элемент</button>
  </div>
  <h1>|</h1>
  <h1>Задание 35.3</h1>
  <div>
    <ul>
      <li v-for="(item, index) in items353" :key="index">{{ item }}</li>
    </ul>
    <button @click="removeLastItem353">Удалить последний элемент</button>
  </div>
  <h1>|</h1>
  <h1>Задание 35.4</h1>
  <div>
    <ul>
      <li v-for="(item, index) in items354" :key="index">{{ item }}</li>
    </ul>
    <button @click="removePenultimateItem354">Удалить предпоследний элемент</button>
  </div>
  <h1>|</h1>
  <h1>Задание 35.5</h1>
  <div>
    <ul>
      <li v-for="(item, index) in items355" :key="index">{{ item }}</li>
    </ul>
    <button @click="sortItems355">Сортировать элементы</button>
  </div>
  <h1>|</h1>
  <h1>Задание 35.6</h1>
  <div>
    <ul>
      <li v-for="(item, index) in items356" :key="index">{{ item }}</li>
    </ul>
    <button @click="reverseItems356">Обратить порядок</button>
  </div>
  <h1>|</h1>
  <h1>Задание 36.1</h1>
  <!-- Для задания 36.1 -->
  <p class="task361">Первый абзац</p>

  <!-- Для задания 36.2 -->
  <p class="task362">Первый абзац</p>
  <h1>|</h1>
  <h1>Задание 36.2</h1>
  <div>
    <p362>Первый абзац</p362>
    <br>
    <p362>Второй абзац</p362>
  </div>
  <h1>|</h1>
  <h1>Задание 36.3</h1>
  <div>
    <p :style="{ color: textColor363 }">Динамический цвет текста</p>
    <button @click="changeColor363">Изменить цвет</button>
  </div>
  <h1>|</h1>
  <h1>Задание 37</h1>
  <p :class="cssClasses371">Текст абзаца</p>
  <p :class="classObject372">Текст абзаца</p>
  <p :class="classArray373">Текст абзаца</p>
  <p :class="[classObject374, 'static-class']">Текст абзаца</p>
  <h1>|</h1>
  <h1>Задание 38</h1>
  <p :class="obj38">Текст с динамическими классами</p>
  <h1>|</h1>
  <h1>Задание 39</h1>
  <div>
    <p :class="obj39">Этот текст может быть скрыт или показан.</p>
    <button @click="showElement39">Показать</button>
    <button @click="hideElement39">Скрыть</button>
    <button @click="toggleElement39">Тогглить</button>
  </div>
  <h1>|</h1>
  <h1>Задание 40</h1>
  <p :class="{ active: true, valid: false }">
    Текст с динамическими классами
  </p>
  <h1>|</h1>
  <h1>Задание 41</h1>
  <p :class="{ valid: isValid41, disabled: isDisabled41 }">
    Текст с динамическими классами
  </p>
  <h1>|</h1>
  <h1>Задание 42</h1>
  <p :style="{ color: 'green', backgroundColor: 'black' }">
    Текст абзаца
  </p>
  <p :style="{ fontWeight: 'bold', fontStyle: 'italic' }">
    Текст абзаца
  </p>
  <h1>|</h1>
  <h1>Задание 43</h1>
  <div>
    <input v-model="message431" placeholder="Введите текст">
    <p>{{ message431 }}</p>
  </div>
  <div>
    <input v-model="message432" placeholder="Введите текст">
    <p>{{ message432.toUpperCase() }}</p>
  </div>
  <div>
    <input type="number" v-model.number="num433" placeholder="Введите число">
    <p>Квадрат числа: {{ num433 * num433 }}</p>
  </div>
  <h1>|</h1>
  <h1>Задание 44</h1>
  <div>
    <input v-model="fullName44" placeholder="Введите ФИО через пробел" />
    <button @click="parseName">Разбить ФИО</button>
    <p>{{ lastName44 }}</p>
    <p>{{ firstName44 }}</p>
    <p>{{ patronymic44 }}</p>
  </div>
  <h1>|</h1>
  <h1>Задание 45.1</h1>
  <div>
    <textarea v-model="text451" placeholder="Введите текст"></textarea>
    <p>{{ text451 }}</p>
  </div>
  <h1>|</h1>
  <h1>Задание 45.2</h1>
  <div>
    <textarea v-model="text452" placeholder="Введите текст"></textarea>
    <button @click="splitText">Разбить текст на слова</button>
    <ul>
      <li v-for="(word, index) in words452" :key="index">
        {{ word }}
      </li>
    </ul>
  </div>
  <h1>|</h1>
  <h1>Задание 46</h1>
  <div>
    <input type="checkbox" v-model="checked46">
    <p v-if="checked46">Этот абзац виден, потому что чекбокс отмечен.</p>
  </div>
  <h1>|</h1>
  <h1>Задание 47</h1>
  <div>
    <h3>Какие языки вы знаете?</h3>
    <div>
      <input type="checkbox" id="lang1" v-model="languages47" value="Русский">
      <label for="lang1">Русский</label>
    </div>
    <div>
      <input type="checkbox" id="lang2" v-model="languages47" value="Английский">
      <label for="lang2">Английский</label>
    </div>
    <div>
      <input type="checkbox" id="lang3" v-model="languages47" value="Испанский">
      <label for="lang3">Испанский</label>
    </div>
    <div>
      <input type="checkbox" id="lang4" v-model="languages47" value="Французский">
      <label for="lang4">Французский</label>
    </div>

    <h3>Выбранные языки:</h3>
    <ul>
      <li v-for="(lang, index) in languages47" :key="index">{{ lang }}</li>
    </ul>
  </div>
  <h1>|</h1>
  <h1>Задание 48.1</h1>
  <div>
    <h3>Какой язык для вас родной?</h3>
    <div>
      <input type="radio" id="russian" value="Русский" v-model="choice481">
      <label for="russian">Русский</label>
    </div>
    <div>
      <input type="radio" id="english" value="Английский" v-model="choice481">
      <label for="english">Английский</label>
    </div>
    <div>
      <input type="radio" id="spanish" value="Испанский" v-model="choice481">
      <label for="spanish">Испанский</label>
    </div>
    <p>Вы выбрали: {{ choice481 }}</p>
  </div>
  <h1>|</h1>
  <h1>Задание 48.2</h1>
  <div>
    <h3>Выберите родной язык</h3>
    <div>
      <input type="radio" id="russian" value="Русский" v-model="choice482">
      <label for="russian">Русский</label>
    </div>
    <div>
      <input type="radio" id="english" value="Английский" v-model="choice482">
      <label for="english">Английский</label>
    </div>
    <div>
      <input type="radio" id="spanish" value="Испанский" v-model="choice482">
      <label for="spanish">Испанский</label>
    </div>

    <!-- Отображаем фразу в зависимости от выбранного языка -->
    <div>
      <p v-if="choice482 === 'Русский'">Привет, как дела?</p>
      <p v-else-if="choice482 === 'Английский'">Hello, how are you?</p>
      <p v-else-if="choice482 === 'Испанский'">Hola, ¿cómo estás?</p>
      <p v-else>Выберите язык</p>
    </div>
  </div>
  <h1>|</h1>
  <h1>Задание 49</h1>
  <div>
    <select v-model="city49">
      <option disabled value="">Выберите город</option>
      <option>Симферополь</option>
      <option>Джанкой</option>
      <option>Ялта</option>
      <option>Севастополь</option>
    </select>
    <p>Вы живете в городе: {{ city49 }}</p>
  </div>
  <h1>|</h1>
  <h1>Задание 50.1</h1>
  <div>
    <select v-model="selectedDay501">
      <option v-for="day in days501" :key="day">{{ day }}</option>
    </select>
    <p>Выбранный день: {{ selectedDay501 }}</p>
  </div>
  <h1>|</h1>
  <h1>Задание 50.2</h1>
  <div>
    <select v-model.number="day502">
      <option v-for="d in 31" :key="d" :value="d">{{ d }}</option>
    </select>

    <select v-model.number="month502">
      <option v-for="m in 12" :key="m" :value="m">{{ m }}</option>
    </select>

    <select v-model.number="year502">
      <option v-for="y in years502" :key="y" :value="y">{{ y }}</option>
    </select>

    <p>Выбрана дата: {{ day502 }}.{{ month502 }}.{{ year502 }}</p>
  </div>
  <h1>|</h1>
  <h1>Задание 50.3</h1>
  <div>
    <select v-model.number="day503">
      <option v-for="d in 31" :key="d" :value="d">{{ d }}</option>
    </select>

    <select v-model.number="month503">
      <option v-for="m in 12" :key="m" :value="m">{{ m }}</option>
    </select>

    <select v-model.number="year503">
      <option v-for="y in years503" :key="y" :value="y">{{ y }}</option>
    </select>

    <p>Выбрана дата: {{ day503 }}.{{ month503 }}.{{ year503 }}</p>
  </div>
  <h1>|</h1>
  <h1>Задание 51.1</h1>
  <div>
    <input :disabled="isInputDisabled511">
    <button @click="toggleInput511">
      {{ isInputDisabled511 ? 'Разблокировать' : 'Заблокировать' }}
    </button>
  </div>
  <h1>|</h1>
  <h1>Задание 51.2</h1>
  <div>
    <input :disabled="!isChecked512">
    <label>
      <input type="checkbox" v-model="isChecked512">
      {{ isChecked512 ? 'Инпут разблокирован' : 'Инпут заблокирован' }}
    </label>
  </div>
  <h1>|</h1>
  <h1>Задание 52.1</h1>
  <div>
    <input
        v-model="inputText521"
        @keyup.enter="showText521"
        placeholder="Напишите и нажмите Enter"
    >
    <p v-if="displayText521">{{ displayText521 }}</p>
  </div>
  <h1>|</h1>
  <h1>Задание 52.2</h1>
  <div>
    <a href="#" @click.ctrl.prevent="showMessage522">Нажмите меня с Ctrl</a>
    <p v-if="message522">{{ message522 }}</p>
  </div>
  <h1>|</h1>
  <h1>Задание 52.3</h1>
  <div>
    <a
        href="#"
        @click.left.prevent="setText523('left')"
        @click.right.prevent="setText523('right')"
        @click.middle.prevent="setText523('middle')"
    >
      Кликните разными кнопками
    </a>
    <p>{{ buttonText523 }}</p>
  </div>
  <h1>|</h1>
  <h1>Задание 53.1</h1>
  <div>
    <input v-model="newItem531" placeholder="Введите элемент">
    <button @click="addItem531">Добавить</button>

    <ul>
      <li v-for="(item, index) in items531" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
  <h1>|</h1>
  <h1>Задание 53.2</h1>
  <div>
    <input v-model="newItem532" placeholder="Введите элемент">
    <button @click="addItem532">Добавить</button>

    <ul>
      <li v-for="(item, index) in items532" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
  <h1>|</h1>
  <h1>Задание 54</h1>
  <div>
    <ul>
      <li
          v-for="(item, index) in items54"
          :key="index"
          @click="removeItem54(index)"
          class="clickable54"
      >
        {{ item }}
      </li>
    </ul>
  </div>
  <h1>|</h1>
  <h1>Задание 55</h1>
  <div>
    <table>
      <thead>
      <tr>
        <th>Имя</th>
        <th>Зарплата</th>
        <th>Возраст</th>
        <th>Действия</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users55" :key="user.id">
        <td>{{ user.name }}</td>
        <td>{{ user.salary }}</td>
        <td>{{ user.age }}</td>
        <td>
          <a href="#" @click.prevent="removeUser55(user.id)" class="delete-link">
            Удалить
          </a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  <h1>|</h1>
  <h1>Задание 56</h1>
  <div class="user-table-container">
    <table class="user-table">
      <thead class="user-table-head">
      <tr class="user-table-header-row">
        <th class="user-table-header-cell">Имя</th>
        <th class="user-table-header-cell">Зарплата</th>
        <th class="user-table-header-cell">Возраст</th>
        <th class="user-table-header-cell">Действия</th>
      </tr>
      </thead>
      <tbody class="user-table-body">
      <tr
          v-for="user in users56"
          :key="user.id"
          class="user-table-body-row"
      >
        <td class="user-table-body-cell">
          <template v-if="!user.isEdit56">
            {{ user.name }}
          </template>
          <input
              v-else
              v-model="user.name"
              type="text"
              class="user-table-edit-input"
          >
        </td>

        <td class="user-table-body-cell">
          <template v-if="!user.isEdit56">
            {{ user.salary }}
          </template>
          <input
              v-else
              v-model.number="user.salary"
              type="number"
              class="user-table-edit-input"
          >
        </td>

        <td class="user-table-body-cell">
          <template v-if="!user.isEdit56">
            {{ user.age }}
          </template>
          <input
              v-else
              v-model.number="user.age"
              type="number"
              class="user-table-edit-input"
          >
        </td>

        <td class="user-table-body-cell user-table-actions-cell">
          <template v-if="!user.isEdit56">
            <button
                @click.prevent="editUser56(user)"
                class="user-table-action-btn user-table-edit-btn"
            >
            </button>
            <button
                @click.prevent="removeUser56(user.id)"
                class="user-table-action-btn user-table-delete-btn"
            >
            </button>
          </template>
          <template v-else>
            <button
                @click.prevent="saveUser56(user)"
                class="user-table-action-btn user-table-save-btn"
            >
            </button>
          </template>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  <h1>|</h1>
  <h1>Задание 59</h1>
  <div class="app-main-container">
    <h1 class="app-main-title">Сотрудники:</h1>
    <div class="app-employees-list">
      <Employee
          name59="Олег"
          surn59="Владимирович"
          :age59="27"
      />
      <Employee
          name59="Наталья"
          surn59="Александровна"
          :age59="42"
      />
    </div>
  </div>
  <h1>|</h1>
  <h1>Задание 60</h1>
  <div class="app-60-container">
    <Task60 :items="['+', '-', '*', '/']" />
  </div>
  <h1>|</h1>
  <h1>Задание 61</h1>
  <div class="app-61-container">
    <Task61
        :name="Task61.name"
        :salary="Task61.salary"
        :age="Task61.age"
    />
  </div>
  <h1>|</h1>
  <h1>Задание 63</h1>
  <div>
    <Task63
        v-for="user in users63"
        :key="user.id"
        :name="user.name"
        :salary="user.salary"
        :age="user.age"
    />
  </div>
  <h1>|</h1>
  <h1>Задание 65</h1>
  <div class="app-65-container">
    <Task65
        @first-action="handleFirstAction65"
        @second-action="handleSecondAction65"
    />
  </div>
  <h1>|</h1>
  <h1>Задание 66</h1>
  <div class="app-container">
    <Task66
        :name="task66.name"
        :salary="task66.salary"
        @name-clicked="handleName66"
        @details-clicked="handleDetails66"
    />
  </div>
  <h1>|</h1>
  <h1>Задание 67</h1>
  <div>
    <Task67 @custom-event="handleClick67" />
  </div>
  <h1>|</h1>
  <h1>Задание 68</h1>
  <div>
    <h2>Список сотрудников</h2>
    <Task68
        v-for="user in users68"
        :key="user.id"
        :id="user.id"
        :name="user.name"
        :surn="user.surn"
        :age="user.age"
        @remove="remove68"
    />
  </div>
  <h1>|</h1>
  <h1>Задание 69</h1>
  <div>
    <h2>Список сотрудников</h2>
    <Task69
        v-for="user in users69"
        :key="user.id"
        :id="user.id"
        :name="user.name"
        :surn="user.surn"
        :age="user.age"
        @change="change69"
    />
  </div>
  <h1>|</h1>
  <h1>Задание 70</h1>
  <div>
    <h2>Список сотрудников</h2>
    <Task701 @add="add70" />
    <Task702
        v-for="user in users70"
        :key="user.id"
        :id="user.id"
        :name="user.name"
        :surn="user.surn"
        :age="user.age"
        @change="change70"
        @remove="remove70"
    />
  </div>
</template>

<script>
import Employee from '@/components/Employee.vue'
import Task60 from '@/components/Task60.vue'
import Task61 from "@/components/Task61.vue"
import Task63 from '@/components/Task63.vue'
import Task65 from '@/components/Task65.vue'
import Task66 from '@/components/Task66.vue'
import Task67 from '@/components/Task67.vue'
import Task68 from '@/components/Task68.vue'
import Task69 from '@/components/Task69.vue'
import Task701 from '@/components/Task701.vue'
import Task702 from '@/components/Task702.vue'



export default {
  components: {
    Employee,
    Task60,
    Task61,
    Task63,
    Task65,
    Task66,
    Task67,
    Task68,
    Task69,
    Task701,
    Task702

  },
  data() {
    const today503 = new Date()
    return {
      users70: [
        { id: 1, name: 'Александр', surn: 'Воробей', age: 23 },
        { id: 2, name: 'Олег', surn: 'Иванов', age: 42 },
        { id: 3, name: 'Сергей', surn: 'Роков', age: 31 }
      ],
      users69: [
        { id: 1, name: 'Максим', surn: 'Иванов', age: 24 },
        { id: 2, name: 'Пётр', surn: 'Петров', age: 45 },
        { id: 3, name: 'Сергей', surn: 'Котов', age: 50 }
      ],
      users68: [
        { id: 1, name: 'Михаил', surn: 'Иванов', age: 30 },
        { id: 2, name: 'Павел', surn: 'Петров', age: 40 },
        { id: 3, name: 'Сергей', surn: 'Кузнецов', age: 50 }
      ],
      task66: {
        name: 'Олег Иванович',
        salary: 159000
      },
      users63: [
        { id: 1, name: 'name1', salary: 100, age: 30 },
        { id: 2, name: 'name2', salary: 200, age: 40 },
        { id: 3, name: 'name3', salary: 300, age: 50 }
      ],
      Task61: {
        name: 'Михаил Николаевич',
        salary: 100000,
        age: 20
      },
      users56: [
        { id: 1, name: 'name1', salary: 100, age: 30, isEdit: false },
        { id: 2, name: 'name2', salary: 200, age: 40, isEdit: false },
        { id: 3, name: 'name3', salary: 300, age: 50, isEdit: false }
      ],
      users55: [
        { id: 1, name: 'name1', salary: 100, age: 30 },
        { id: 2, name: 'name2', salary: 200, age: 40 },
        { id: 3, name: 'name3', salary: 300, age: 50 }
      ],
      items54: ['Элемент 1', 'Элемент 2', 'Элемент 3', 'Элемент 4', 'Элемент 5'],
      newItem532: '',
      items532: ['Элемент 1', 'Элемент 2', 'Элемент 3'],
      newItem531: '',
      items531: ['Элемент 1', 'Элемент 2', 'Элемент 3'],
      buttonText523: '',
      message522: '',
      inputText521: '',
      displayText521: '',
      isChecked512: false,
      isInputDisabled511: false,
      day503: today503.getDate(),
      month503: today503.getMonth() + 1,
      year503: today503.getFullYear(),
      years503: Array.from({length: 100}, (_, i) => today503.getFullYear() - i),
      day502: 1,
      month502: 1,
      year502: new Date().getFullYear(),
      years502: Array.from({length: 100}, (_, i) => new Date().getFullYear() - i),
      selectedDay501: 'Понедельник',
      days501: [
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
        'Воскресенье'
      ],
      city49: '',
      choice482: '',
      choice481: '',
      languages47: [],
      checked46: false,
      text452: '',
      words452: [],
      text451: '',
      fullName44: '',
      lastName44: '',
      firstName44: '',
      patronymic44: '',
      num433: 0,
      message432: '',
      message431: '',
      isValid41: true,
      isDisabled41: true,
      obj39: {
        hidden39: true,
      },
      obj38: {
        done: true,
        selected: false,
      },
      isActive374: true,
      classArray373: ['class1', 'class2'],
      isActive372: true,
      isError372: false,
      cssClasses371: 'class1 class2',
      textColor363: 'green',
      items356: ['Элемент 1', 'Элемент 2', 'Элемент 3'],
      items355: ['Луна', 'Солнце', 'Вода', 'Ветер'],
      items354: ['Элемент 1', 'Элемент 2', 'Элемент 3', 'Элемент 4'],
      items353: ['Элемент 1', 'Элемент 2', 'Элемент 3'],
      items352: ['Элемент 1', 'Элемент 2', 'Элемент 3'],
      items351: ['Элемент 1', 'Элемент 2', 'Элемент 3'],
      products34: [
        {
          id: 1,
          name: 'product1',
        },
        {
          id: 2,
          name: 'product2',
        },
        {
          id: 3,
          name: 'product3',
        },
      ],
      items33: [1, -2, 3, -4, 5],
      products312: [
        {
          name: 'product1',
          price: 100,
          quantity: 5
        },
        {
          name: 'product2',
          price: 200,
          quantity: 4
        },
        {
          name: 'product3',
          price: 300,
          quantity: 3
        }
      ],
      hrefs311: [
        { href: '1.html', text: 'text1' },
        { href: '2.html', text: 'text2' },
        { href: '3.html', text: 'text3' }
      ],
      items302: [1, 2, 3],
      items301: [1, 2, 3],
      obj294: {
        user1: '100$',
        user2: '200$',
        user3: '300$'
      },
      obj293: {
        user1: '100$',
        user2: '200$',
        user3: '300$'
      },
      obj292: {
        user1: '100$',
        user2: '200$',
        user3: '300$'
      },
      obj291: {
        user1: '100$',
        user2: '200$',
        user3: '300$'
      },
      arr28: ['x', 'y', 'z'],
      items273: [1, 2, 3, 4, 5],
      items272: [1, 2, 3, 4, 5],
      items271: [1, 2, 3, 4, 5],
      visible26: true,
      visible25: true,
      age24: 25,
      day23: 'Среда',
      isAdmin22: true,
      visible211: false,
      visible212: false,
      visible213: false,
      visible201: false,
      visible202: false,
      visible203: false,
      visible193: false,
      visible192: false,
      visible191: false,
      hidden18: false,
      visible: true, // Измените на false, чтобы увидеть второй абзац
      name: 'john',
      surn: 'smit',
      text: 'page',
      href: 'page.html',
      num: 5,
      num1: 1,
      num2: 2,
      num3: 3,
      arr: ['x', 'y', 'z'],
      arr1: [1, 2, 3],
      obj: { x: 1, y: 2, z: 3 },
      text1: 'Стандартный текст',
      cost: 50,
      amount: 3
    }
  },
  computed: {
    price() {
      return this.cost * this.amount;
    },
    classObject372() {
      return {
        active: this.isActive372,
        error: this.isError372
      }
    },
    classObject374() {
      return {
        active: this.isActive374,
        'text-large': !this.isActive374
      }
    },
  },
  methods: {
    add70(name, surn, age) {
      let id = this.users70.length + 1;
      this.users70.push({ id, name, surn, age });
    },
    change70(id, name, surn, age) {
      this.users70 = this.users70.map(user =>
          user.id === id ? { ...user, name, surn, age } : user
      );
    },
    remove70(id) {
      this.users70 = this.users70.filter(user => user.id !== id);
    },
    change69(id, name, surn, age) {
      this.users69 = this.users69.map(user =>
          user.id === id ? { ...user, name, surn, age } : user
      );
    },
    remove68(id) {
      this.users68 = this.users68.filter(user => user.id !== id);
    },
    handleClick67() {
      alert('Событие получено!');
    },
    handleName66(name) {
      console.log('Получено имя:', name)
    },
    handleDetails66({ name, salary }) {
      console.log('Данные сотрудника:', name, salary)
    },
    handleFirstAction65() {
      alert('Вызвано первое действие')
    },
    handleSecondAction65() {
      alert('Вызвано второе действие')
    },
    editUser56(user) {
      user.isEdit56 = true
    },
    saveUser56(user) {
      user.isEdit56 = false
    },
    removeUser56(userId) {
      this.users56 = this.users56.filter(user => user.id !== userId)
    },
    removeUser55(userId) {
      this.users55 = this.users55.filter(user => user.id !== userId)
    },
    removeItem54(index) {
      this.items54.splice(index, 1)
    },
    addItem532() {
      if (this.newItem532.trim()) {
        this.items532.unshift(this.newItem532.trim())
        this.newItem532 = ''
      }
    },
    addItem531() {
      if (this.newItem531.trim()) {
        this.items531.push(this.newItem531.trim())
        this.newItem531 = ''
      }
    },
    setText523(text) {
      this.buttonText523 = text
    },
    showMessage522() {
      this.message522 = 'Ctrl нажат!'
    },
    showText521() {
      this.displayText521 = this.inputText521
      this.inputText521 = ''
    },
    toggleInput511() {
      this.isInputDisabled511 = !this.isInputDisabled511
    },
    splitText() {
      this.words452 = this.text452.trim().split(/\s+/);
    },
    parseName() {
      const parts = this.fullName44.trim().split(' ');
      this.lastName44 = parts[0] || '';
      this.firstName44 = parts[1] || '';
      this.patronymic44 = parts[2] || '';
    },
    showElement39() {
      this.obj39.hidden39 = false;
    },
    hideElement39() {
      this.obj39.hidden39 = true;
    },
    toggleElement39() {
      this.obj39.hidden39 = !this.obj39.hidden39;
    },
    changeColor363() {
      this.textColor363 = this.textColor363 === 'green' ? 'red' : 'black';
    },
    reverseItems356() {
      this.items356.reverse();
    },
    sortItems355() {
      this.items355.sort();
    },
    removePenultimateItem354() {
      if (this.items354.length > 1) {
        this.items354.splice(this.items354.length - 2, 1);
      }
    },
    removeLastItem353() {
      this.items353.pop();
    },
    removeFirstItem352() {
      this.items352.shift();
    },
    addItem351() {
      this.items351.push(`Элемент ${this.items351.length + 1}`);
    },
    toggle26() {
      this.visible26 = !this.visible26;
    },
    hideParagraphs25() {
      this.visible25 = false;
    },
    toggle211() {
      this.visible211 = !this.visible211;
    },
    toggle212() {
      this.visible212 = !this.visible212;
    },
    toggle213() {
      this.visible213 = !this.visible213;
    },
    toggle201() {
      this.visible201 = !this.visible201;
    },
    toggle202() {
      this.visible202 = !this.visible202;
    },
    toggle203() {
      this.visible203 = !this.visible203;
    },
    show193() {
      this.visible193 = true;
    },
    hide193() {
      this.visible193 = false;
    },
    show192() {
      this.visible192 = true;
    },
    hide192() {
      this.visible192 = false;
    },
    show191() {
      this.visible191 = true;
    },
    handleClick2() {
      alert("Ты нажал кнопку, но больше не сможешь!");
    },
    handleClick() {
      alert("Клик обработан, но переход заблокирован!");
    },
    changeCost() {
      this.cost = Math.floor(Math.random() * 500) + 50; // Генерируем случайную цену
    },
    changeText() {
      this.text1 = 'Текст изменен!';
    },
    setText(newText) {
      this.text1 = newText;
    },
    showSquare(num) {
      alert(num * num)
    },
    showDate() {
      alert(new Date().toLocaleDateString());
    },
    showSum() {
      alert(this.num1 + this.num2);
    },
    getDayName(num) {
      const days = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота"
      ];
      return days[num];
    },
    showCurrentDay() {
      const currentDayNumber = new Date().getDay();
      const currentDayName = this.getDayName(currentDayNumber);
      alert(currentDayName);
    }
  }
}
</script>


<style>
.app-65-container {
  max-width: 400px;
  margin: 2rem auto;
  padding: 1rem;
  text-align: center;
}

.app-61-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1.5rem;
}

.app-60-container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
}

.app-main-container {
  max-width: 700px;
  margin: 40px auto;
  padding: 25px;
  font-family: 'Arial', sans-serif;
  background:rgb(227, 232, 231);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.app-main-title {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 35px;
  font-size: 2.2em;
  font-weight: 700;
  letter-spacing: -0.5px;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}

.app-employees-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 15px;
}

.user-table-container {
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.user-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 15px rgba(0,0,0,0.1);
}

.user-table-head {
  background: #2c3e50;
}

.user-table-header-row {
  height: 50px;
}

.user-table-header-cell {
  padding: 15px 20px;
  color: white;
  text-align: left;
  font-weight: 600;
  font-size: 14px;
}

.user-table-body-row {
  transition: background 0.2s;
  border-bottom: 1px solid #ecf0f1;
}

.user-table-body-row:hover {
  background: #f8f9fa;
}

.user-table-body-cell {
  padding: 12px 20px;
  font-size: 14px;
  color: #34495e;
}

.user-table-edit-input {
  width: 90%;
  padding: 8px 12px;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
  transition: border-color 0.3s;
}

.user-table-edit-input:focus {
  border-color:rgb(52, 219, 102);
  outline: none;
}

.user-table-actions-cell {
  width: 150px;
}

.user-table-action-btn {
  border: none;
  background: none;
  cursor: pointer;
  padding: 8px;
  margin: 0 4px;
  border-radius: 50%;
  transition: all 0.2s;
  font-size: 16px;
}

.user-table-edit-btn {
  color: #3498db;
}

.user-table-edit-btn:hover {
  background: #e8f4fd;
}

.user-table-save-btn {
  color:rgb(127, 174, 39);
}

.user-table-save-btn:hover {
  background: #e8f6ef;
}

.user-table-delete-btn {
  color:rgb(244, 66, 47);
}

.user-table-delete-btn:hover {
  background: #fdedec;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

th, td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f8f9fa;
}

.delete-link {
  color:rgb(77, 15, 22);
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s;
}

.delete-link:hover {
  color: #bb2d3b;
  text-decoration: underline;
}

.clickable54 {
  cursor: pointer;
  padding: 5px;
  margin: 2px;
  transition: background-color 0.3s;
}

.clickable54:hover {
  background-color: #f0f0f0;
}
.task361 { color: red; }
.hidden39 {
  display: none;
}
</style>

<style scoped>
.task362 { color: green; }
</style>