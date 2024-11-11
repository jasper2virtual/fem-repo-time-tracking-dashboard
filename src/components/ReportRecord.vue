<template>
    <div :class="['daisy-card bg-[length:4.875rem] bg-no-repeat bg-right-top',
        bgColor,
        bgIcon
    ]">
        <div
            class="mt-12 bg-app-neutral-darkBlue duration-1000 transition-colors hover:cursor-pointer hover:bg-app-neutral-desaturatedBlue hover:duration-100 rounded-2xl p-8 flex flex-col gap-4 grow justify-center">
            <div class="flex items-center justify-between">
                <div class="text-white font-medium text-lg">{{ title }}</div>
                <button class="daisy-btn daisy-btn-ghost hover:brightness-200"><img src="/src/assets/images/icon-ellipsis.svg" alt=""></button>
            </div>
            <div class="flex items-center justify-between desktop:flex-col desktop:items-start">
                <div class=" font-light text-[calc(32rem/16)] text-white desktop:text-[calc(56rem/16)]">{{ currentValue }}hrs</div>
                <div class="text-[calc(15rem/16)] text-app-neutral-paleBlue">{{previousLabel}} - {{ previouseValue }}hrs</div>
            </div>
        </div>
    </div>
</template>
<script>
import recordType from '/src/assets/recordType.json'
export default {
    props: {
        typeId: {
            type: String,
            required: true
        },
        timeframes: {
            type: Object,
            required: true
        },
        command: {
            type: String,
            validator(value) {
                return ['showDaily', 'showWeekly', 'showMonthly', ''].includes(value);
            },
        }
    },
    data() {
        return {
            recordType
        }
    },
    computed: {
        recordTypeInfo() {
            return this.recordType.find(type => type.id === this.typeId)
        },
        title() {
            return this.recordTypeInfo.title
        },
        bgIcon() {
            return `bg-app-icon-${this.recordTypeInfo.id}`
        },
        bgColor() {
            return `bg-app-primary-${this.recordTypeInfo.color}`
        },
        timeframeData() {
            if (this.command) {
                return this.timeframes[{
                    showDaily: 'daily',
                    showWeekly: 'weekly',
                    showMonthly: 'monthly'
                }[this.command]]
            }
        },
        currentValue() {
            if (this.timeframeData) {
                return this.timeframeData.current
            }
            return '--'
        },
        previouseValue() {
            if (this.timeframeData) {
                return this.timeframeData.previous
            }
            return '--'
        },
        previousLabel(){
            if (this.command) {
                return {
                    showDaily: 'Last day',
                    showWeekly: 'Last week',
                    showMonthly: 'Last month'
                }[this.command]
            }
            return '---'
        }
    }

}

</script>