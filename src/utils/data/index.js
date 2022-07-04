export const poseInstructions = {
    Tree: [
        'DIfficulty:Easy',
        'Start by standing straight with a long, tall back and your feet aligned and touching. Your arms should be straight along either side of your body.',
        'Take a few breaths and find a place or object in the room to focus your attention. Slowly shift your weight to your left leg and begin to raise your right foot off the floor. Align the sole of your right foot with the inside of your left thigh. The toes should be pointing down and your pelvis should be completely straight.',
        'Stretch your arms straight up toward the ceiling with palms pressed together forming an inverted V.',
        'Hold and repeat. Hold the pose for as long as necessary, making sure to breathe properly. When you’re ready to switch legs, exhale, and return to the pose to start again.',
        <a target="blank" href="https://classpass.com/movements/tree-pose">Know More</a>
        ],
    Chair: [
        'Difficulty:Easy',
        'Stand straight and tall with your feet slightly wider than hip­-width apart and your arms at your sides.',
        'Inhale and lift your arms next to your ears, stretching them straight and parallel with wrists and fingers long. Keep your shoulders down and spine neutral.',    
        'Exhale as you bend your knees, keeping your thighs and knees parallel. Lean your torso forward to create a right angle with the tops of your thighs. Keep your neck and head in line with your torso and arms. Hold for 30 seconds to 1 minute.',
        <a target="blank" href="https://classpass.com/movements/chair-pose">Know More</a>
    ],
    Dog: [
        'Difficulty:Intermediate',
        'Spread your hands wide on the mat with your arms internally rotated. Position your feet hip-width apart.',
        'With your chin tucked into your chest and pelvic floor engaged, lift your hips and gaze at your toes through your legs. ',
        'Keep your legs straight and your heels on the mat. Your body should look like an upside-down "V".',
        'Stay in the pose for 10 or more breaths, then bend your knees on an exhalation and lower yourself.',
        <a target="blank" href="https://classpass.com/movements/downward-dog">Know More</a>
    
    ],
    Cobra: [
        'Difficulty:Easy',
        'Begin on your belly with your feet hip-distance apart and your hands beside your ribs.Extend your big toes straight back and press down with all ten toenails to activate your quadriceps.',
        'Rotate your inner thighs toward the ceiling to broaden the lower back.Pressing down lightly with your hands, start to lift your head and chest, rolling your shoulders back and down.',
        'Keep the back of your neck long and focus on lifting your sternum instead of lifting your chin.Straighten your arms while keeping your shoulders remaining away from your ears. Keep at least a slight bend in your elbows.',
        'To exit the pose, release back to your mat.',
        <a target="blank" href="https://www.yogajournal.com/poses/cobra-pose-2/">Know More</a>
    ],
    Warrior: [
        'Difficulty:Hard',
        'Begin in lunge with your front knee bent, your back leg straight and your back heel lifted. Your hips and chest should be squared to front of the mat. Raise your arms above your head.',
        'Move your hands to your heart, with palms pressed against each other in a prayer position. Lean forward until your back leg extends straight back, even with your hips. Keep your foot flexed and your gaze downward.',
        'Make sure your standing leg is strong and straight, but not locked at knee. Reach your arms forward so your body forms a “T” shape.',
        <a target="blank" href="https://www.yogajournal.com/poses/warrior-3-pose/">Know More</a>
    ],
    Traingle: [
        'Difficulty:Medium',
        'Begin standing, then lightly jump your feet apart to a wide position about three to four feet apart. Turn your left foot out and turn to face that direction. Take a slight bend in your left leg and raise your arms out on your sides, forming a “T” shape.',
        'Straighten through your left leg, then hinge and reach your torso over your left leg as your hips jut back. Rotate your left palm so it faces the ceiling, and gaze out over your left arm.',
        'Maintain a long, straight spine as you reach your left hand to the mat, placing it in front of your left foot. If you feel off balance, bring in your back leg closer to shorten your stance. Gaze towards your right arm, which should be extended overhead. Hold and repeat on the other side.',
        <a target="blank" href="https://classpass.com/movements/triangle-pose/">Know More</a>
    ],
    Shoulderstand: [
        'Difficulty:Hard',
        'Start with a stack of two folded blankets. Lay down on your mat aligning shoulders onto the blankets. With legs bent and feet on the floor (as if setting up for bridge pose) begin to walk your shoulders underneath your upper back feeling the chest gently rising.',
        'Lift your hips off of the mat coming into bridge pose and extend your arms onto the ground, palms facing down as if your hands could touch your heels. Press firmly into the palms using them as leverage to lift onto the balls of the feet and extend one leg up. Bend at the elbows, place your hands on your low back creating a shelf, and then extend the next leg up.',
        "Once you raise the legs, don't turn your head to the side to look around the room, since you can injure your neck. Keep your gaze upward and your neck straight.",
        "Lift up through the balls of your feet. Walk your hands further up the back for more stability. Feel the chest reaching towards the chin to support opening the upper back.",
        "Move your hips toward the front of the room and your feet toward the back of the room to straighten the body. The correct alignment is with the hips over the shoulders and feet over the hips. Ask your teacher or a friend to help you determine if your legs are perpendicular to the floor.",
        "Stay in the pose for up to 10 breaths",
        <a target="blank" href="https://www.verywellfit.com/shoulderstand-salamba-sarvangasana-3567115">Know More</a>
    ]
    
}


export const tutorials = [
    '1. When App ask for permission of camera, allow it to access to capture pose.',
    '2. Select what pose you want to do in the dropdown.',
    '3. Read Instrctions of that pose so you will know how to do that pose.',
    '4. Click on Start pose and see the image of the that pose in the right side and replecate that image in front of camera.',
    '5. If you will do correctly the skeleton over the video will become green in color and sound will start playing'
]

export const fixCamera = [
    'Solution 1. Make sure you have allowed the permission of camera, if you have denined the permission, go to setting of your browser to allow the access of camera to the application.',
    'Solution 2. Make sure no any other application is not accessing camera at that time, if yes, close that application',
    'Solution 3. Try to close all the other opened broswers'
] 

export const POINTS = {
    NOSE : 0,
    LEFT_EYE : 1,
    RIGHT_EYE : 2,
    LEFT_EAR : 3,
    RIGHT_EAR : 4,
    LEFT_SHOULDER : 5,
    RIGHT_SHOULDER : 6,
    LEFT_ELBOW : 7,
    RIGHT_ELBOW : 8,
    LEFT_WRIST : 9,
    RIGHT_WRIST : 10,
    LEFT_HIP : 11,
    RIGHT_HIP : 12,
    LEFT_KNEE : 13,
    RIGHT_KNEE : 14,
    LEFT_ANKLE : 15,
    RIGHT_ANKLE : 16,
}

export const keypointConnections = {
    nose: ['left_ear', 'right_ear'],
    left_ear: ['left_shoulder'],
    right_ear: ['right_shoulder'],
    left_shoulder: ['right_shoulder', 'left_elbow', 'left_hip'],
    right_shoulder: ['right_elbow', 'right_hip'],
    left_elbow: ['left_wrist'],
    right_elbow: ['right_wrist'],
    left_hip: ['left_knee', 'right_hip'],
    right_hip: ['right_knee'],
    left_knee: ['left_ankle'],
    right_knee: ['right_ankle']
}