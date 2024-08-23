<script lang="ts">
// @ts-nocheck

	import SurveyBuilder from "$lib/components/organisms/SurveyBuilder.svelte";
	import simple from '$lib/data/survey/simple.json';
    import type { ScreenSchema } from "$lib/utils/types";

    function recommender(screen: ScreenSchema[], results) {
        // First find the questions that screened positive
        const positiveScreen = screen.filter(ele => {
            if (ele.type = "radio") {
                return results[ele.question] === ele.positiveAnswer
            }
        })

        console.log(positiveScreen)
    }
    
</script>

<SurveyBuilder screenQuestions={simple.screen} on:results={e => recommender(simple.screen, e.detail.results)} />