<template>
    <div class="daisy-card bg-app-neutral-darkBlue">
        <div class="bg-app-primary-blue grid grid-cols-[auto_1fr] grid-rows-2 gap-x-4 rounded-2xl p-8 grow
        desktop:grid-cols-1 desktop:grid-rows-3 desktop:gap-y-4">
            <div class="daisy-avatar row-span-2 self-center desktop:row-span-1 desktop:self-end">
                <div class="ring-white w-16 rounded-full ring ">
                    <slot name="avatarImg" />
                </div>
            </div>
            <div class="text-app-neutral-paleBlue self-end text-sm">Report for</div>
            <div class="daisy-card-title text-white font-light text-2xl desktop:self-start desktop:text-[calc(40rem/16)]">{{ name }}</div>
        </div>
        <div class="flex justify-between p-8 desktop:flex-col desktop:items-start">
            <button v-for="{label,command,emitted} in commandButtons"
                :class="['daisy-btn daisy-btn-ghost hover:text-white text-lg font-normal',
                    emitted ? 'text-white':'text-app-neutral-paleBlue'
                ]"
                @click="sendCommand(command)"
                >{{ label }}
            </button>
        </div>
    </div>
</template>
<script>
export default {
    emits:['showDaily','showWeekly','showMonthly'],
    props: {
        name: {
            type: String,
            required: true
        }
    },
    data(){
        return{
            commandButtons:[
                {label: 'Daily',command:'showDaily',emitted:false},
                {label: 'Weekly',command:'showWeekly',emitted:false},
                {label: 'Monthly',command:'showMonthly',emitted:false}
            ]
        }
    },
    methods: {
        sendCommand(command) {
            this.commandButtons.forEach(button => {
                button.emitted = button.command === command
            })
            this.$emit(command)
        }
    }
}
</script>