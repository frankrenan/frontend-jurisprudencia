<template>
    <pre :class="languageClass" ref="code"><code><slot></slot>
    </code></pre>
</template>

<script>
import Prism from 'prismjs';
import 'prismjs/themes/prism-coy.css';

export default {
    props: {
        lang: {
            type: String,
            default: 'markup'
        }
    },
    computed: {
        languageClass() {
            return 'language-' + this.lang;
        }
    },
    mounted() {
        Prism.highlightElement(this.$el.children[0]);
    }
};
</script>