<template>
  <div class="card">
    <h1 class="title">Junior Developer - Blockchain</h1>
    <p class="location">London, Fulham - Apple</p>
    <div class="new">
      <p>New</p>
    </div>

    <ul class="list">
      <li class="list__item">
        <svg class="list__icon" viewBox="0 0 24 24">
          <path
            d="M14.12,10H19V8.2H15.38L13.38,4.87C13.08,4.37 12.54,4.03 11.92,4.03C11.74,4.03 11.58,4.06 11.42,4.11L6,5.8V11H7.8V7.33L9.91,6.67L6,22H7.8L10.67,13.89L13,17V22H14.8V15.59L12.31,11.05L13.04,8.18M14,3.8C15,3.8 15.8,3 15.8,2C15.8,1 15,0.2 14,0.2C13,0.2 12.2,1 12.2,2C12.2,3 13,3.8 14,3.8Z"
          />
        </svg>
        <p>400 steps away</p>
      </li>
      <li class="list__item">
        <svg class="list__icon" viewBox="0 0 24 24">
          <path
            d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"
          />
        </svg>
        <p>Full-time</p>
      </li>
      <li class="list__item">
        <svg class="list__icon" viewBox="0 0 24 24">
          <path
            d="M7.07,11L7,12L7.07,13H17.35L16.5,15H7.67C8.8,17.36 11.21,19 14,19C16.23,19 18.22,17.96 19.5,16.33V19.12C18,20.3 16.07,21 14,21C10.08,21 6.75,18.5 5.5,15H2L3,13H5.05L5,12L5.05,11H2L3,9H5.5C6.75,5.5 10.08,3 14,3C16.5,3 18.8,4.04 20.43,5.71L19.57,7.75C18.29,6.08 16.27,5 14,5C11.21,5 8.8,6.64 7.67,9H19.04L18.19,11H7.07Z"
          />
        </svg>
        <p>30,000</p>
      </li>
    </ul>

    <div class="actions">
      <span class="actions__action actions__action--save">
        <span class="actions__text-container">
          <p class="actions__text">Save</p>
        </span>
        <span class="actions__icon-container">
          <svg class="actions__icon actions__icon--heart" viewBox="0 0 24 24">
            <path
              d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
            />
          </svg>
        </span>
      </span>

      <div class="actions">
        <span class="actions__action actions__action--apply">
          <span class="actions__text-container">
            <p class="actions__text">Apply</p>
          </span>
          <span class="actions__icon-container">
            <svg class="actions__icon actions__icon--paperplane" viewBox="0 0 24 24">
              <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
            </svg>
          </span>
        </span>
      </div>
    </div>

    <p class="date">Posted 14 December 2016</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
$border-purple-600: #805ad5;

.card {
  @apply grid bg-white p-4 border-b border-gray-300;
  border-left: solid 4px transparent;
  grid-template-columns: repeat(2, max-content) 1fr max-content;
  grid-template-areas:
    "title     title     title    new"
    "location  location  company  ."
    "list      list      actions  actions"
    "list      list      actions  actions"
    "list      list      actions  actions"
    "date      date      .        .";

  &:hover {
    @apply bg-gray-100;
    border-left: solid 4px $border-purple-600;
  }
}
.title {
  @apply font-semibold text-xl;
  grid-area: title;
}

.new {
  @apply bg-purple-600 self-center py-1 px-5 shadow rounded-sm text-white;
  grid-area: new;
}

.location {
  @apply mb-4;
  grid-area: location;
}

.company {
  grid-area: company;
}

.date {
  @apply text-gray-600;
  grid-area: date;
}

.list {
  @apply flex flex-col mb-4;
  grid-area: list;

  &__item {
    @apply flex mb-1 text-gray-700;
  }

  &__icon {
    @apply w-5 fill-current text-blue-400 mr-2;
  }
}

.actions {
  grid-area: actions;
  justify-self: end;

  &__action {
    @apply flex rounded-md bg-white border h-10;

    &--save {
      @apply mb-2;
    }
  }

  &__text-container,
  &__icon-container {
    @apply flex items-center justify-center;
  }

  &__text-container {
    @apply w-20;
  }

  &__icon-container {
    @apply w-12 bg-gray-100 border-l border-gray-300 rounded-r;
  }

  &__icon {
    @apply fill-current w-4;

    &--heart {
      @apply text-pink-600;
    }

    &--paperplane {
      @apply text-blue-600;
    }
  }
}
</style>
