<script lang="ts">
import { Component, Setup, Vue } from 'vue-facing-decorator'
import { useI18n } from 'vue-i18n';

@Component({})
export default class I18nView extends Vue {
  @Setup(useI18n) readonly i18n!: any;
}
</script>

<template>
  <div>
    <h1>i18n test page</h1>
    <form>
      <select v-model="$i18n.locale">
      <option value="en">EN</option>
      <option value="fr">FR</option>
      </select>
    </form>
    <article style="margin-top:24px">
      <h4><em>hello</em> translation <strong>from global</strong></h4>
      <pre>$t('hello') = {{ $t('hello') }}</pre>
      <pre>i18n.t('hello') <small>defined via Setup decorator</small> = {{ i18n.t('hello') }}</pre>
      <pre>&lt;i18n-t keypath="hello" /&gt; = <i18n-t keypath="hello" /></pre>
    </article>
    <article style="margin-top:24px">
      <h4><em>bye</em> translation <strong>from local</strong></h4>
      <pre>$t('bye') = {{ $t('bye') }}</pre>
      <pre>i18n.t('bye') <small>defined via Setup decorator</small> = {{ i18n.t('bye') }}</pre>
      <pre>&lt;i18n-t keypath="bye" /&gt; = <i18n-t keypath="bye" /></pre>
    </article>
  </div>
</template>

<i18n>
{
  "en": {
    "bye": "Goodbye from i18nView/i18n bloc!"
  },
  "fr": {
    "bye": "Aurevoir depuis I18nView/I18n block!"
  }
}
</i18n>

