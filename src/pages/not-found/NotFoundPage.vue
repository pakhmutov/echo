<script setup lang="ts"></script>

<template>
  <div class="box">
    <div class="title">404</div>
    <p class="caption">Page not Found :[</p>

    <RouterLink to="/" class="return">Go to main page</RouterLink>
  </div>
</template>

<style lang="scss" scoped>
@use '@/shared/styles/mixins' as *;

.box {
  @include d-flex(column, center, center);
  position: absolute;
  inset: 0;
  gap: var(--spacing-5);
  animation: composition-glow 8s infinite;
}

.title {
  @include text-display-4;
  transform: scale(1.5);
  animation: flash 8s infinite;
  transition: text-shadow 0.3s ease;
}

.caption {
  @include text-header-1;
}

.return {
  @include text-body-2;
  color: rgb(0, 234, 255);
}

@keyframes flash {
  0% {
    text-shadow:
      0 0 2px rgba(255, 255, 255, 0.3),
      0 0 4px rgba(255, 255, 255, 0.2);
  }

  1% {
    text-shadow:
      0 0 4px rgb(0, 225, 255),
      0 0 8px rgb(0, 225, 255),
      0 0 12px rgb(0, 234, 255),
      0 0 16px rgb(0, 234, 255),
      0 0 20px rgb(0, 179, 255);
  }

  1.001% {
    text-shadow:
      0 0 2px rgba(255, 255, 255, 0.3),
      0 0 4px rgba(255, 255, 255, 0.2);
  }

  10% {
    text-shadow:
      0 0 2px rgba(255, 255, 255, 0.3),
      0 0 4px rgba(255, 255, 255, 0.2);
  }

  11.001% {
    text-shadow:
      0 0 4px rgb(0, 225, 255),
      0 0 8px rgb(0, 225, 255),
      0 0 12px rgb(0, 234, 255),
      0 0 16px rgb(0, 234, 255),
      0 0 20px rgb(0, 179, 255);
  }

  11.002% {
    text-shadow:
      0 0 2px rgba(255, 255, 255, 0.3),
      0 0 4px rgba(255, 255, 255, 0.2);
  }

  12% {
    text-shadow:
      0 0 4px rgb(0, 225, 255),
      0 0 8px rgb(0, 225, 255),
      0 0 12px rgb(0, 234, 255),
      0 0 16px rgb(0, 234, 255),
      0 0 20px rgb(0, 179, 255);
  }

  39.999% {
    text-shadow:
      0 0 4px rgb(0, 225, 255),
      0 0 8px rgb(0, 225, 255),
      0 0 12px rgb(0, 234, 255),
      0 0 16px rgb(0, 234, 255),
      0 0 20px rgb(0, 179, 255);
  }

  40% {
    text-shadow:
      0 0 2px rgba(255, 255, 255, 0.3),
      0 0 4px rgba(255, 255, 255, 0.2);
  }

  41% {
    text-shadow:
      0 0 4px rgb(0, 225, 255),
      0 0 8px rgb(0, 225, 255),
      0 0 12px rgb(0, 234, 255),
      0 0 16px rgb(0, 234, 255),
      0 0 20px rgb(0, 179, 255);
  }

  41.001% {
    text-shadow:
      0 0 2px rgba(255, 255, 255, 0.3),
      0 0 4px rgba(255, 255, 255, 0.2);
  }

  75% {
    text-shadow:
      0 0 2px rgba(255, 255, 255, 0.3),
      0 0 4px rgba(255, 255, 255, 0.2);
  }

  75.5% {
    text-shadow:
      0 0 4px rgb(0, 225, 255),
      0 0 8px rgb(0, 225, 255),
      0 0 12px rgb(0, 234, 255),
      0 0 16px rgb(0, 234, 255),
      0 0 20px rgb(0, 179, 255);
  }

  75.501% {
    text-shadow:
      0 0 2px rgba(255, 255, 255, 0.3),
      0 0 4px rgba(255, 255, 255, 0.2);
  }

  80% {
    text-shadow:
      0 0 2px rgba(255, 255, 255, 0.3),
      0 0 4px rgba(255, 255, 255, 0.2);
  }

  81.001% {
    text-shadow:
      0 0 4px rgb(0, 225, 255),
      0 0 8px rgb(0, 225, 255),
      0 0 12px rgb(0, 234, 255),
      0 0 16px rgb(0, 234, 255),
      0 0 20px rgb(0, 179, 255);
  }

  81.002% {
    text-shadow:
      0 0 2px rgba(255, 255, 255, 0.3),
      0 0 4px rgba(255, 255, 255, 0.2);
  }

  82% {
    text-shadow:
      0 0 4px rgb(0, 225, 255),
      0 0 8px rgb(0, 225, 255),
      0 0 12px rgb(0, 234, 255),
      0 0 16px rgb(0, 234, 255),
      0 0 20px rgb(0, 179, 255);
  }

  82.001% {
    text-shadow:
      0 0 4px rgb(0, 225, 255),
      0 0 8px rgb(0, 225, 255),
      0 0 12px rgb(0, 234, 255),
      0 0 16px rgb(0, 234, 255),
      0 0 20px rgb(0, 179, 255);
  }

  82.002% {
    text-shadow:
      0 0 2px rgba(255, 255, 255, 0.3),
      0 0 4px rgba(255, 255, 255, 0.2);
  }

  83% {
    text-shadow:
      0 0 4px rgb(0, 225, 255),
      0 0 8px rgb(0, 225, 255),
      0 0 12px rgb(0, 234, 255),
      0 0 16px rgb(0, 234, 255),
      0 0 20px rgb(0, 179, 255);
  }

  83.001% {
    text-shadow:
      0 0 2px rgba(255, 255, 255, 0.3),
      0 0 4px rgba(255, 255, 255, 0.2);
  }

  83.002% {
    text-shadow:
      0 0 4px rgb(0, 225, 255),
      0 0 8px rgb(0, 225, 255),
      0 0 12px rgb(0, 234, 255),
      0 0 16px rgb(0, 234, 255),
      0 0 20px rgb(0, 179, 255);
  }

  83.003% {
    text-shadow:
      0 0 2px rgba(255, 255, 255, 0.3),
      0 0 4px rgba(255, 255, 255, 0.2);
  }

  88% {
    text-shadow:
      0 0 4px rgb(0, 225, 255),
      0 0 8px rgb(0, 225, 255),
      0 0 12px rgb(0, 234, 255),
      0 0 16px rgb(0, 234, 255),
      0 0 20px rgb(0, 179, 255);
  }
}

@keyframes composition-glow {

  0%,
  95% {
    filter: brightness(1);
  }

  /* Разные композиционные эффекты для ритма */
  1% {
    filter: brightness(1.05) saturate(1.1);
  }

  11.001%,
  12% {
    filter: brightness(1.08) contrast(1.02) hue-rotate(5deg);
  }

  41% {
    filter: brightness(1.06) saturate(1.15);
  }

  75.5% {
    filter: brightness(1.07) contrast(1.03) hue-rotate(-3deg);
  }

  81.001%,
  82%,
  83%,
  88% {
    filter: brightness(1.1) contrast(1.04) saturate(1.2);
  }
}
</style>